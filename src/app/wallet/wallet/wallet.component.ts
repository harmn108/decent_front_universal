import {Component, OnInit} from '@angular/core';
import {DecentCoreService} from '../../core/services/decent-core.service';
import {Account} from '../../core/model/account';
import {AccountService} from '../../core/services/account.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

    balance: number = null;
    account: Account;
    transactions = null;

    constructor(private decentCore: DecentCoreService, public accountService: AccountService) {
    }


    ngOnInit() {
        this.account = this.accountService.getCurrentUser();

        // get balance
        this.decentCore.getAccountBalances(this.accountService.getCurrentUser())
            .subscribe(balance => this.balance = balance);

        this.decentCore.getAccountHistory(this.accountService.getCurrentUser())
            .subscribe(transactions => this.transactions = transactions);
    }
}
