import {Component, OnInit} from '@angular/core';
import {User} from '../../signup/signup/user';
import {AccountService} from '../../core/services/account.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../validator/validator';
import {Router} from '@angular/router';
import {ErrorMessage} from '../../shared/errors-message/error.message';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    user = new User();

    formErrors = '';

    validationMessages = {
        'invalidLogin': 'Yor email or password is not correct'
    };

    signinForm: FormGroup;
    submitted: Boolean = false;

    constructor(private accountService: AccountService, private formBuilder: FormBuilder, private router: Router) {
    }

    ngOnInit() {
        this.buildForm();
        this.signinForm.valueChanges.subscribe(data => {
            return this.formErrors = '';
        })
    }

    buildForm(): void {
        this.signinForm = this.formBuilder.group({
            'email': new FormControl('', [Validators.required, ValidationService.emailValidator]),
            'password': new FormControl('', [Validators.required, ValidationService.passwordValidator]),
        });
    }

    login() {
        this.submitted = true;
        this.user = this.signinForm.value;
        this.accountService.login(this.user)
            .subscribe(
                data => {
                    this.loginVerification(data);
                },
                err => {
                    this.submitted = false;
                    if (err._body) {
                        const errMessage = JSON.parse(err._body).message;
                        this.formErrors = ErrorMessage[errMessage];
                    } else {
                        this.formErrors = this.validationMessages.invalidLogin; // brainKeyDecrypt error
                    }
                }
            );
    }

    loginVerification(step2data) {
        this.accountService.loginVerification(step2data)
            .subscribe(
                data => {
                    this.redirectTo(data);
                    this.submitted = false;
                },
                err => {
                    this.submitted = false;
                    const errMessage = JSON.parse(err._body).message;
                    this.formErrors = ErrorMessage[errMessage];

                });
    }

    redirectTo(data) {
        if (data.phraseSaved) {
            this.accountService.phraseSaved().subscribe(
                () => {
                },
                err => console.error(err)
            )
        }
        this.router.navigate(['/']);
    }
}