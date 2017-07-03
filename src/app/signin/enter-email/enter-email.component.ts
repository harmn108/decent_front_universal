import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../core/services/account.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../validator/validator';
import {ErrorMessage} from '../../shared/errors-message/error.message';

@Component({
    selector: 'app-enter-email',
    templateUrl: './enter-email.component.html',
    styleUrls: ['./enter-email.component.scss']
})
export class EnterEmailComponent implements OnInit {

    accountError;

    emailForm: FormGroup;

    constructor(private accountService: AccountService,
                private router: Router,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.buildForm();
        this.emailForm.valueChanges.subscribe(data => {
            return this.accountError = '';
        })
    }

    buildForm(): void {
        this.emailForm = this.formBuilder.group({
            'email': new FormControl ('', [Validators.required, ValidationService.emailValidator]),
        });
    }

    mailForHint() {
        this.accountService.getHint(this.emailForm.value.email).subscribe(
            data => {
                this.router.navigate(['sign-in/my-password-hint']);
            },
            err => {
                const errMessage = JSON.parse(err._body).message;
                this.accountError = ErrorMessage[`${errMessage}`];
            }
        );
    }


}