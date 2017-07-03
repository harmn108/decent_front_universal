import {Injectable} from '@angular/core';

const {Apis, ChainConfig} = require('decentjs-lib/lib/ws/cjs');
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Account} from '../model/account';
import {Content} from '../model/content';

import {TransactionDetailObject} from '../model/transaction.detail.object';
import {observable} from 'rxjs/symbol/observable';

let {
    ChainStore,
    FetchChain,
    PrivateKey,
    TransactionHelper,
    Aes,
    TransactionBuilder,
    ChainValidation,
    key
} = require('decentjs-lib/lib');

export const asset_id = '1.3.0';
export const DCTPrecision = 8;
export const DCTPower = 100000000; // 10^8

@Injectable()
export class DecentCoreService {
    private api;
    private chainStore;

    constructor() {
        ChainConfig.networks.decent = {
            chain_id: environment.chain_id
        };

        // ws://192.168.88.207:8099
        // ws://127.0.0.1:8090
        this.api = Apis.instance(environment.decent_network_wspath, true).init_promise.then(res => {
            this.chainStore = ChainStore.init();
        });
    }

    getApi() {
        return this.api;
    }

    /**
     * Check account balance
     * @param account
     * @param callback
     */
    getAccountBalances(account: Account): Observable<number> {
        return Observable.create(observer => {
                this.api.then((res) => {

                    if (account.id) {
                        Apis.instance().db_api().exec('get_account_balances', [account.id, [asset_id]]).then(result => {
                            observer.next(result['0'].amount);
                        });
                    } else if (account.name) {
                        FetchChain('getAccount', account.name)
                            .then(getAccountResult => {
                                Apis.instance().db_api().exec('get_account_balances', [getAccountResult.get('id'), [asset_id]])
                                    .then(result => {
                                        observer.next(result['0'].amount);
                                    });
                            });
                    } else {
                        throw new TypeError('Account id or name should be given!');
                    }
                });
            }
        );
    }

    transfer(fromAccount: Account, toAccount: string, amount: number, memo: string = ''): Observable<boolean> {

        // check private key
        if (!fromAccount.pkey) {
            throw new Error('Transfer needs a private key!');
        }

        const pKey = PrivateKey.fromWif(fromAccount.pkey);
        memo = (memo) ? memo : '';

        return new Observable(observable => {

            this.api.then(apiRes => {
                ChainStore.init().then(() => {

                    const memoSender = fromAccount.name;

                    // add precision
                    amount = Math.floor(amount * Math.pow(10, DCTPrecision));

                    const sendAmount = {
                        amount,
                        asset: 'DCT'
                    };

                    Promise.all([
                        FetchChain('getAccount', fromAccount.name),
                        FetchChain('getAccount', toAccount),
                        FetchChain('getAccount', memoSender),
                        FetchChain('getAsset', sendAmount.asset),
                        FetchChain('getAsset', sendAmount.asset)
                    ]).then((res) => {
                        // console.log("got data:", res);
                        const [fromAccount, toAccount, memoSender, sendAsset, feeAsset] = res;

                        if (!fromAccount) {
                            throw new Error('From Account has not been found');
                        }
                        if (!toAccount) {
                            throw new Error('To Account has not been found');
                        }

                        // Memos are optional, but if you have one you need to encrypt it here
                        const memoFromKey = memoSender.get('owner').get('key_auths').get(0).get(0);
                        const memoToKey = toAccount.get('owner').get('key_auths').get(0).get(0);
                        const nonce = TransactionHelper.unique_nonce_uint64();

                        const memo_object = {
                            from: memoFromKey,
                            to: memoToKey,
                            nonce,
                            message: Aes.encrypt_with_checksum(
                                pKey,
                                memoToKey,
                                nonce,
                                memo
                            )
                        };

                        const tr = new TransactionBuilder()

                        tr.add_type_operation('transfer', {
                            fee: {
                                amount: 0,
                                asset_id: feeAsset.get('id')
                            },
                            from: fromAccount.get('id'),
                            to: toAccount.get('id'),
                            amount: {amount: sendAmount.amount, asset_id: sendAsset.get('id')},
                            memo: memo_object
                        })

                        tr.set_required_fees().then(() => {
                            tr.add_signer(pKey, pKey.toPublicKey().toPublicKeyString());
                            tr.broadcast(() => {
                                observable.next(true);
                            });
                        });
                    }).catch(reason => {
                        observable.error(reason);
                    });
                });
            });
        });
    }


    /**
     *
     * @param account
     * @returns {any}
     */
    getAccountHistory(account: Account): Observable<TransactionDetailObject[]> {

        // if it is empty
        if (!account) {
            return Observable.of<TransactionDetailObject[]>([]);
        }

        return Observable.create(observer => {
            this.api.then(() => {
                ChainStore.init().then(() => {
                    FetchChain('getAccount', account.name).then(acc => {
                        Apis.instance().db_api().exec('search_account_history', [acc.get('id'), '-time', '0.0.0', 100])
                            .then(transactions => {

                                transactions = transactions.map(transaction => {

                                    const tr = new TransactionDetailObject(transaction);

                                    tr.m_memo_string = tr.m_memo.getMessage(account);

                                    // retrieving full account
                                    tr.m_from_account_full = Observable.create(obs => {
                                        FetchChain('getAccount', transaction.m_from_account).then(full_account => {
                                            obs.next(full_account);
                                        });
                                    });


                                    return tr;
                                });


                                observer.next(transactions);
                            });
                    });
                });
            });
        });
    }

    /**
     *
     * @param term
     * @param order
     * @param user
     * @param region_code
     * @param category examples: '1', '1.1' or '1.1.1'
     * @param count
     * @returns Observable<Content[]>
     */
    searchContent(term: string, order = '', user = '', region_code = '', category, count): Observable<Content[]> {

        return Observable.create(observer => {
            this.api.then((res) => {
                Apis.instance().db_api().exec('search_content', [term, order, user, region_code, '0.0.0', category, count])
                    .then(contents => {
                        contents = contents.map(content => {
                            return new Content(content);
                        });

                        observer.next(contents);
                    });
            });
        });
    }

    getAccountByName(name: string): Observable<any> {
        return Observable.create(observer => {
            this.api.then((res) => {
                Apis.instance().db_api().exec('get_account_by_name', [name])
                    .then(account => {
                        observer.next(account);
                    });
            });
        });
    }
}


