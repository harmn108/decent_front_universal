import {Component, OnInit, Output} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {CryptService} from '../../core/services/crypt.service';
import {ErrorMessage} from '../../shared/errors-message/error.message';

@Component({
    selector: 'app-security',
    templateUrl: './security.component.html',
    styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

    logedIn;
    phraseSeen;
    brainKey;
    phrase;
    passwordHint;
    password;
    showHint;
    hint;
    accountError;
    phraseSaved;

    opened = {
        phrase: '',
        hint: ''
    };

    constructor(private accountService: AccountService, private cryptService: CryptService) {
        this.brainKey = this.accountService.brainKey;
        this.password = this.accountService.password;
        this.logedIn = this.accountService.isLogedIn();
        this.accountService.getHint(this.accountService.email).subscribe(
            data => {
                this.passwordHint = data;
            },
            err => {
                const errMessage = JSON.parse(err._body).message;
                this.accountError = ErrorMessage[errMessage];
            }
        );
        this.phraseSaved = this.accountService.isRecoveryPhraseSaved;
    }

    ngOnInit() {
    }

    generatePhrase() {
        this.cryptService.brainKeyDecrypt(this.brainKey, this.password).subscribe(
            data => {
                this.phrase = data;
                this.opened.phrase = 'opened';
                this.phraseSaved = true;
            },
            err => {
                console.error(err);
            }
        );
    }

    openHint() {
        this.showHint = true;
        this.opened.hint = 'opened';
    }

    saveHint() {
        this.accountService.createHint(this.hint).subscribe(
            data => {
                this.passwordHint = this.accountService.passwordHint;
            },
            err => {
                const errMessage = JSON.parse(err._body).message;
                this.accountError = ErrorMessage[errMessage];
            }
        );
    }

    handleContentData(event) {
        this.opened.phrase = '';
        this.phrase = event.phrase;
        this.phraseSaved = event.phraseSaved;
    }

    clearError() {
        this.accountError = '';
    }
}
