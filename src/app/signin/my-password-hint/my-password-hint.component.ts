import {Component, Input, OnInit} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../validator/validator';
import {Router} from '@angular/router';
import {ErrorMessage} from '../../shared/errors-message/error.message';

@Component({
    selector: 'app-my-password-hint',
    templateUrl: './my-password-hint.component.html',
    styleUrls: ['./my-password-hint.component.scss']
})
export class MyPasswordHintComponent implements OnInit {

    passwordHint: string;
    error = false;
    email: string;
    accountError;

    hintForm: FormGroup;

    validationMessages = {
        'invalidLogin': 'Something wrong with your password'
    };

    constructor(private accountService: AccountService,
                private router: Router,
                private formBuilder: FormBuilder) {

        this.passwordHint = this.accountService.passwordHint || 'You haven\'t password hint';
        this.email = this.accountService.email;
    }

    ngOnInit() {
        this.buildForm();
        this.hintForm.valueChanges.subscribe(data => {
            return this.accountError = '';
        })
    }

    buildForm(): void {
        this.hintForm = this.formBuilder.group({
            'password': new FormControl ('', [Validators.required, ValidationService.passwordValidator]),
        });
    }

    login() {
        this.accountService.login({email: this.email, password: this.hintForm.value.password}).subscribe(
            data => {
                this.loginVerification(data);
            },
            err => {
                if (err._body) {
                    const errMessage = 'hint_' + JSON.parse(err._body).message;
                    this.accountError = ErrorMessage[errMessage];
                } else {
                    this.accountError = this.validationMessages.invalidLogin; // brainKeyDecrypt error
                }
            }
        );
    }

    loginVerification(step2data) {
        this.accountService.loginVerification(step2data)
            .subscribe(
                data => {
                    this.router.navigate(['/']);
                },
                err => {
                    const errMessage = 'hint_' + JSON.parse(err._body).message;
                    this.accountError = ErrorMessage[errMessage];
                });
    }
}