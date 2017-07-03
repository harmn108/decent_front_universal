import { FormControl, ValidatorFn, Validators } from '@angular/forms';

export class ValidationService {

    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'email': `Email type is not correct`,
            // 'required': 'validation.required',
            'invalidEmailAddress': 'validation.invalidEmailAddress',
            'currentPassword': 'validation.currentPassword',
            'primary': 'validation.primary',
            // 'addEmail':'validation.addEmail',
            'invalidPassword': `<span>Password must be</span> at least 8 characters, contain UPPERCASE letter, a lowercase
                            letter and number or symbol`,
            // 'minlength': `validation.minlength ${validatorValue?validatorValue.requiredLength:0}`,
            'invalidConfirmPassword': 'Confirmed password is not correct',
            'number': 'validation.number',
            // 'minValue': `validation.minValue ${validatorValue?validatorValue:0}`,
            // 'maxValue': `validation.maxValue ${validatorValue?validatorValue:0}`
        };

        return config[validatorName];
    }

    static emailValidator(control) {
        if (control.value && control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'email': true };
        }
    }

    static passwordValidator (control) {
        if (control.value && control.value.match(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }

    // function for checking plain password validation
    static passwordsEqualValidator(c: FormControl) {

        if (c.value.password.length > 0 &&
            (c.value.certainPassword.length > 0 &&
            c.value.password !== c.value.certainPassword)) {
            return {'invalidConfirmPassword': true};
        } else {
            return null;
        }
    }
}