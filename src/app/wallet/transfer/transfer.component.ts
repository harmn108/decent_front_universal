import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {DecentCoreService} from '../../core/services/decent-core.service';
import {Transfer} from '../transfer';


import {CustomValidators} from 'ng2-validation';
import {AccountService} from '../../core/services/account.service';
import {CryptService} from '../../core/services/crypt.service';
import {MdSnackBar} from '@angular/material';
// import {accountValidator} from '../../validators/account-exists.validator';

@Component({
    selector: 'app-transfer',
    templateUrl: './transfer.component.html',
    styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

    /**
     *
     * @type {Transfer}
     */
    model = new Transfer();

    /**
     *
     * @type {any}
     */
    apiError: string = null;

    /**
     * this contains form errors
     * @type {{sendTo: string; amount: string}}
     */
    formErrors = {
        'sendTo': '',
        'amount': ''
    };

    validationMessages = {
        'sendTo': {
            'required': 'Name is required.',
            'notEqual': 'You can\'t transfer yourself'
        },
        'amount': {
            'required': 'Amount is required.',
            'gt': 'Amount should be positive.',
            'lt': 'Amount should be up to balance.'
        }
    };

    submitted = false;
    transferForm: FormGroup;

    /**
     *
     * @type {number}
     */
    balance: number = null;

    constructor(private fb: FormBuilder,
                private decentCore: DecentCoreService,
                private accountService: AccountService,
                private cryptService: CryptService,
                public snackBar: MdSnackBar) {
    }

    ngOnInit() {
        this.updateBalance();
        this.buildForm();
    }

    buildForm(): void {
        this.transferForm = this.fb.group({
            'sendTo': [this.model.sendTo, [Validators.required, CustomValidators.notEqual(`${this.accountService.email}`)] /*, [accountValidator(this.api)]*/],
            'amount': [this.model.amount, [Validators.required, CustomValidators.gt(0)]],
            'memo': [this.model.memo]
        });
        this.transferForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data?: any) {
        if (!this.transferForm) {
            return;
        }
        const form = this.transferForm;

        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }


    /**
     * transfer DCT form current account to an other one
     * @param event
     */
    onSubmit() {

        this.submitted = true;
        this.model = this.transferForm.value;
        this.apiError = null;

        let sendTo = this.model.sendTo;
        if (this.model.sendTo.indexOf('@') !== -1) {
            sendTo = 'u' + this.cryptService.md5(sendTo);
        }

        this.decentCore.getAccountBalances(this.accountService.getCurrentUser())
            .subscribe(balance => {

                this.balance = balance;

                if (balance < this.model.amount) {
                    this.submitted = false;
                    this.openSnackBar('Insufficient funds!', '');
                } else {
                    this.decentCore.transfer(this.accountService.getCurrentUser(), sendTo, this.model.amount, this.model.memo)
                        .subscribe(res => {
                            this.updateBalance();
                            this.openSnackBar('Transfer was successful!', '');
                            this.submitted = false;
                            this.transferForm.reset();

                            Object.keys(this.transferForm.controls).forEach(key => {
                                this.transferForm.controls[key].setErrors(null);
                            });

                        }, res => {
                            this.submitted = false;
                            this.openSnackBar('Error during the transfer', '');
                            this.apiError = res;
                        });
                }
            });

    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    }

    /**
     * Update balance
     */
    private updateBalance() {
        this.decentCore.getAccountBalances(this.accountService.getCurrentUser())
            .subscribe(balance => {
                this.balance = balance;
            });
    }

}
