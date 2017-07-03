import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../core/services/account.service';
import {ValidationService} from '../../validator/validator';
import {Router} from '@angular/router';
import {ErrorMessage} from '../../shared/errors-message/error.message';


@Component({
    selector: 'app-new-password',
    templateUrl: './new-password.component.html',
    styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

    passwordForm: FormGroup;
    formErrors: string;

    validationMessages = {
        'account': {
            'required': 'Something wrong with your account'
        }
    };

    constructor(private accountService: AccountService, private formBuilder: FormBuilder, private router: Router) {
    }

    ngOnInit() {
        this.buildForm();
        this.passwordForm.valueChanges.subscribe(data => {
            return this.formErrors = '';
        })
    }

    buildForm(): void {
        this.passwordForm = this.formBuilder.group({
            'password': new FormControl ('', [Validators.required, ValidationService.passwordValidator]),
            'certainPassword': new FormControl ('', [Validators.required, ValidationService.passwordValidator])
        }, {validator: ValidationService.passwordsEqualValidator});
    }

    save() {
        this.accountService.generateNewPassword(this.passwordForm.value.password)
            .subscribe(
                data => {
                    this.redirectTo();
                },
                err => {
                    console.log('err', err);
                    const errMessage = JSON.parse(err._body).message;
                    this.formErrors = ErrorMessage[errMessage];
                }
            );
    }

    redirectTo() {
        this.router.navigate(['/']);
    }


}