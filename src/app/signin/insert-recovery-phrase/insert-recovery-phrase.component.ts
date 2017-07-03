import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-edit-reacovery-phras',
    templateUrl: './insert-recovery-phrase.html',
    styleUrls: ['./insert-recovery-phrase.component.scss']
})
export class InsertRecoveryPhraseComponent implements OnInit {

    recoveryPhrase;
    phraseError: string;
    private validationMessages = 'Wrong Recovery Phrase';

    constructor(private accountService: AccountService, private router: Router) {
    }

    ngOnInit() {
    }

    insertRecoveryPhrase() {
        this.accountService.insertPhrase(this.recoveryPhrase).subscribe(
            data => {
                this.redirectTo();
            },
            err => {
                this.phraseError = this.validationMessages;
            }
        );
    }

    redirectTo() {
        this.router.navigate(['sign-in/new-password']);
    }

    clearError() {
        this.phraseError = '';
    }

}