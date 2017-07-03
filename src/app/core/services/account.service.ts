import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {User} from '../../signup/signup/user';

import {CryptService} from './crypt.service';
import {environment} from '../../../environments/environment';

import {AES} from 'crypto-js/aes';
import {PublicKey, PrivateKey, Signature, key} from '../../../../node_modules/decentjs-lib/lib/ecc';
import {Router} from '@angular/router';
import {Account} from '../model/account';
import {DecentCoreService} from './decent-core.service';

@Injectable()
export class AccountService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private usersUrl = environment.decentgo_url + '/api/v1/user';
    private authenticateUrl = '/signin/authenticate/';
    private getTokenUrl = '/signin/get-token';
    private resendEmailUrl = '/resend-email';
    private hintUrl = '/password-hint';
    private checkPubKeyUrl = '/check-public-key';
    private recoverAccount = '/recover-account';
    private checkEmail = '/check-email';
    private signOutUrl = '/signout';
    private phrasSavedUrl = '/recovery-phrase-saved';

    passwordHint: string;
    private userInfo = {};
    brainKey: string;
    private pkey: string;
    recoveryPhraseSeen: Boolean;
    recoveryPhrase;

    // token: string;
    private currentUser: Account;
    token;
    password;
    email;
    logedIn: Boolean = false;
    isRecoveryPhraseSaved;

    //
    constructor(private http: Http,
                private router: Router,
                private cryptService: CryptService,
                private decentCoreService: DecentCoreService) {
        this.isLogedIn();
    }

    isLogedIn() {
        this.token && this.password && this.email ? this.logedIn = true : this.logedIn = false;
    }

    logOut() {
        this.currentUser = new Account();
        this.token = '';
        this.password = '';
        this.email = '';
        this.logedIn = false;
        this.router.navigate(['/']);
    }


    /**
     * @TODO this should be written in much better way
     * @returns {Account}
     */
    getCurrentUser(): Account {
        return this.currentUser;
    }

    create(user: User): Observable<User[]> {
        return this.http
            .put(this.usersUrl, user, {headers: this.headers})
            .map(response => {
                this.email = user.email;
                this.password = user.password;
                if (response.status === 200) {
                    let loginInfo = response.json();
                    this.currentUser = new Account();
                    this.brainKey = loginInfo.brainKey;
                    this.token = loginInfo.token;
                    this.currentUser.name = loginInfo.username;

                    this.loadUserInfo();
                    this.isLogedIn();
                    return {res : loginInfo};
                }
            })
            .catch(error => this.handleError(error));
    }

    resendEmail(email: string) {
        return this.http
            .post(this.usersUrl + this.resendEmailUrl, {email}, {headers: this.headers})
            .map(response => response.json() as String)
            .catch(error => this.handleError(error));
    }

    confirm(code: string) {
        return this.http
            .get(this.usersUrl + `/confirmation/${code}`, {headers: this.headers})
            .map(response => {
                this.email = response.json().email;
                this.brainKey = response.json().brainKey;
                return true;
            })
            .catch(error => this.handleError(error));
    }

    createHint(passwordHint: string) {
        return this.http
            .post(this.usersUrl + this.hintUrl, {passwordHint, email: this.email}, {headers: this.headers})
            .map(response => {
                this.passwordHint = passwordHint;
                return true;
            })
            .catch(error => this.handleError(error));
    }

    /**
     * @param user
     * @returns {Observable<R|T>}
     */
    login(user: User) {
        let stringHash;
        let signedString;
        this.email = user.email;
        return this.http
            .post(this.usersUrl + this.authenticateUrl + user.email, user ,  {headers: this.headers})
            .map(response => {

                this.currentUser = new Account();

                this.userInfo = response.json();
                this.brainKey = this.userInfo['brainKey'];
                this.password = user.password;
                return this.cryptService.brainKeyDecrypt(this.userInfo['brainKey'], user.password).subscribe(
                    brainKeyDecrypt => {
                        // remove " symbols from the end and beginning
                        if (brainKeyDecrypt.substr(0, 1) === '"') {
                            brainKeyDecrypt = brainKeyDecrypt.substr(1, brainKeyDecrypt.length - 2);
                        }

                        // const privkey = this.cryptService.generatePrivateKey(brainKeyDecrypt);
                        const privkey = this.cryptService.generatePrivateKey(brainKeyDecrypt);
                        const publicKey = this.cryptService.generatePublicKey(privkey);

                        // assign current key
                        this.currentUser.pkey = privkey.toWif();
                        this.currentUser.pubKey = publicKey;

                        if (this.userInfo['publicKey'] === publicKey) {
                            stringHash = this.cryptService.stringToHash(this.userInfo['signString']);
                            signedString = this.cryptService.hashToSign(stringHash, privkey);
                        }
                    },
                    err => {
                        return err;
                    }
                );
            })
            .map(response => {
                response.unsubscribe();
                return {email: user.email, signedString, stringHash};
            })
            .catch(error => this.handleError(error));
    }

    getPrivateKey(password: string) {
        return this.cryptService.brainKeyDecrypt(this.brainKey, password).subscribe(
            brainKeyDecrypt => {
                // remove " symbols from the end and beginning
                if (brainKeyDecrypt.substr(0, 1) === '"') {
                    brainKeyDecrypt = brainKeyDecrypt.substr(1, brainKeyDecrypt.length - 2);
                }

                return this.cryptService.generatePrivateKey(brainKeyDecrypt);
            },
            err => {
                return err;
            }
        );
    }

    loginVerification(data) {
        return this.http
            .post(this.usersUrl + this.getTokenUrl, data, {headers: this.headers})
            .map(response => {
                // maybe isRecoveryPhraseSaved is 'true' but doesn't saved in server;
                let hadPhrase = true;
                if (!this.isRecoveryPhraseSaved) {
                    this.isRecoveryPhraseSaved = response.json().isRecoveryPhraseSaved;
                    hadPhrase = false;
                }


                this.token = response.json().token;
                this.currentUser.name = response.json().username;

                this.loadUserInfo();
                this.isLogedIn();
                return {res : response, phraseSaved: hadPhrase};
            })
            .catch(error => this.handleError(error));
    }

    phraseSaved() {
        const tokenHeader = new Headers({'X-API-TOKEN': this.token});
        return this.http
            .post(this.usersUrl + this.phrasSavedUrl, '',  {headers: tokenHeader})
            .map(response => this.isRecoveryPhraseSaved = true)
            .catch(error => this.handleError(error));
    }

    insertPhrase(recoveryPhrase) {
        const privkey = this.cryptService.generatePrivateKey(recoveryPhrase);
        const publicKey = this.cryptService.generatePublicKey(privkey);

        return this.http
            .post(this.usersUrl + this.checkPubKeyUrl, {publicKey}, {headers: this.headers})
            .map(response => {
                this.recoveryPhrase = recoveryPhrase;
            })
            .catch(error => this.handleError(error));
    }

    generateNewPassword(password) {
        const privkey = this.cryptService.generatePrivateKey(this.recoveryPhrase);
        const publicKey = this.cryptService.generatePublicKey(privkey);
        this.brainKey = this.cryptService.brainKeyEncrypt('' + this.recoveryPhrase, password);
        const stringHash = this.cryptService.stringToHash(this.brainKey);
        const signedString = this.cryptService.hashToSign(stringHash, privkey);

        return this.http
            .post(this.usersUrl + this.recoverAccount, {
                publicKey,
                signedString,
                stringHash,
                brainKey: this.brainKey
            }, {headers: this.headers})
            .map(response => {
                this.currentUser = new Account();
                const user = response.json();
                this.token = user.token;
                this.email = user.email;
                this.password = password;

                this.currentUser.name = user.username;

                this.loadUserInfo();
                this.isLogedIn();
            })
            .catch(error => this.handleError(error));
    }

    getHint(email) {
        return this.http
            .post(this.usersUrl + this.checkEmail, {email}, {headers: this.headers})
            .map(response => {
                this.passwordHint = response.json().passwordHint;
                this.email = email;
                return this.passwordHint;
            })
            .catch(error => this.handleError(error));
    }

    signOut() {
        const token = this.token;
        const tokenHeader = new Headers({'X-API-TOKEN': `${token}`});
        return this.http
            .post(this.usersUrl + this.signOutUrl, '', {headers: tokenHeader})
            .map(response => {
                this.logOut();
            })
            .catch(error => this.handleError(error));
    }

    getUserInfo(token) {
        const tokenHeader = new Headers({'X-API-TOKEN': `${token}`});
        return this.http
            .get(this.usersUrl, {headers: tokenHeader})
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }

    private handleError(error: any): Observable<any> {
        if (error.status == 404) {
            error._body = '{"message": "user_not_found"}';
            return Observable.throw(error);
        }
        return Observable.throw(error.message || error);
    }

    private loadUserInfo() {
        if (!this.currentUser.name) {
            throw new Error('Not able to load data by empty username!');
        }
        this.decentCoreService.getAccountByName(this.currentUser.name).subscribe(result => {
            if (result.id) {
                this.currentUser.id = result.id;
            }
        });
    }
}