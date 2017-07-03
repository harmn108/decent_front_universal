import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CryptService} from '../../core/services/crypt.service';
import {AccountService} from '../../core/services/account.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../validator/validator';

@Component({
    selector: 'app-recovery-phrase',
    templateUrl: './recovery-phrase.component.html',
    styleUrls: ['./recovery-phrase.component.scss']
})
export class RecoveryPhraseComponent implements OnInit {

    phraseForm: FormGroup;
    @Output() phraseInfo = new EventEmitter;

    formErrors = '';
    headHide: Boolean = false;
    currentUser;

    verified = false;
    private decryptedPhrase: string;

    constructor(private cryptService: CryptService,
                private accountService: AccountService,
                private router: Router,
                private formBuilder: FormBuilder,
                private location: Location) {
    }

    ngOnInit() {
        if (this.location.path() === '/wallet/security') {
            this.headHide = true;
        }
        this.buildForm();
        this.phraseForm.valueChanges.subscribe(data => {
            return this.formErrors = '';
        });
        this.currentUser = this.accountService.getCurrentUser();
    }

    buildForm(): void {
        this.phraseForm = this.formBuilder.group({
            'password': new FormControl('', [Validators.required, ValidationService.passwordValidator]),
        });
    }

    verify() {
        // recovery phrase added to local storage after confirm
        const recoveryPhrase = this.accountService.brainKey;
        this.cryptService.brainKeyDecrypt(recoveryPhrase, this.phraseForm.value.password).subscribe(
            data => {
                this.decryptedPhrase = data;
                this.verified = true;
                this.accountService.recoveryPhraseSeen = true;
                // remove ' symbols from the end and beginning
                if (this.decryptedPhrase.indexOf('"') !== -1) {
                    this.decryptedPhrase = this.decryptedPhrase.substr(1, this.decryptedPhrase.length - 2);
                }
            },
            err => {
                this.formErrors = 'Something wrong, please try again';
            });
    }

    changePage() {
        if (this.accountService.token) {
            this.accountService.phraseSaved().subscribe(() => {
                this.phraseInfo.emit({phraseSaved: this.accountService.isRecoveryPhraseSaved, phrase: false});
            });
        } else {
            this.router.navigate(['sign-up/password-hint']);
            this.accountService.isRecoveryPhraseSaved = true;
        }
    }

}