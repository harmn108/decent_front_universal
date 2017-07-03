import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {AccountService} from '../../core/services/account.service';
import {User} from './user';
import {Router} from '@angular/router';
import {ValidationService} from '../../validator/validator';
import {ErrorMessage} from '../../shared/errors-message/error.message';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

    user = new User();
    accountError;
    signupForm: FormGroup;
    submitted: Boolean = false;

    constructor(private accountService: AccountService,
                private router: Router,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.buildForm();
        this.signupForm.valueChanges.subscribe(data => {
            return this.accountError = '';
        })
    }

    buildForm(): void {
        this.signupForm = this.formBuilder.group({
            'email': new FormControl ('', [Validators.required, ValidationService.emailValidator]),
            'password': new FormControl ('', [Validators.required, ValidationService.passwordValidator]),
            'certainPassword': new FormControl ('', [Validators.required, ValidationService.passwordValidator]),
            'agreed': new FormControl ('', [Validators.required])
        }, {validator: ValidationService.passwordsEqualValidator});
    }

    onSubmit() {
        delete this.signupForm.value.certainPassword;
        this.user = this.signupForm.value;
        this.save();
    }

    save(): void {
        this.submitted = true;
        this.accountService.create(this.user)
            .subscribe(
                data => {
                    this.submitted = false;
                    this.redirectTo(data);
                },
                err => {
                    this.submitted = false;
                    const errMessage = JSON.parse(err._body).message;
                    this.accountError = ErrorMessage[errMessage];
                }
            );
    }

    redirectTo(data) {
        if (data) {
            this.router.navigate(['/']);
        } else {
            this.router.navigate(['/sign-up/check-email']);
        }
    }

}
