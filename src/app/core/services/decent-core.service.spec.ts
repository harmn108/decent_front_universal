import {TestBed, inject} from '@angular/core/testing';

import {DecentCoreService} from './decent-core.service';
import {Account} from '../model/account';

let {
    ChainStore,
    FetchChain,
    PrivateKey,
    PublicKey,
    TransactionHelper,
    Aes,
    TransactionBuilder,
    ChainValidation,
    key
} = require('decentjs-lib/lib');


describe('DecentCoreService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DecentCoreService]
        });
    });

    it('should ...', inject([DecentCoreService], (service: DecentCoreService) => {
        expect(service).toBeTruthy();
    }));


    it('Should see user balance', inject([DecentCoreService], (service: DecentCoreService) => {

        setTimeout(function() {

            let a = new Account();
            a.pkey = "5JyUPjEmeY4UbLNzY4gweXU39oothYnLxUhYvSP8pXRR4YTXaJf";
            a.name = "dctusr3";
            a.id = "1.2.28";

            service.transfer(a, "decent6", 0.01, "Please see this").subscribe(
                () => console.log("done")
            );

            /*

            service.getAccountHistory(a).subscribe(
                (transactions) => console.log(transactions)
            );
            */
            
        }, 10000);
        
        //service.getAccountBalances('1.2.20').subscribe(balance => {
         //   expect(balance).toBeGreaterThan(0);
        //});
    }));
});
