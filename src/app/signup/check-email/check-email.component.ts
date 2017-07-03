import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AccountService} from '../../core/services/account.service';
import { ErrorMessage } from '../../shared/errors-message/error.message';


@Component({
    selector: 'app-check-email',
    templateUrl: './check-email.component.html',
    styleUrls: ['./check-email.component.scss']
})
export class CheckEmailComponent implements OnInit {

    public email;
    accountError;

    constructor(private accountService: AccountService) {
        this.email = this.accountService.email;
    }

    ngOnInit() {
    }

    resendEmail() {
        this.accountService.resendEmail(this.email).subscribe(
            data => {
                console.log(data);
            },
            err => {
                const errMessage = JSON.parse(err._body).message;
                this.accountError = ErrorMessage[errMessage];
            }
        );
    }
}