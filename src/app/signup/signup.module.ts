import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import {HttpModule} from '@angular/http';

import {SignupComponent} from './signup/signup.component';
import {SecurityCenterComponent} from './security-center/security-center.component';
import {RecoveryPhraseComponent} from '../shared/recovery-phrase/recovery-phrase.component';
import {PasswordHintComponent} from '../shared/password-hint/password-hint.component';
import {CheckEmailComponent} from './check-email/check-email.component';
import {WaitComponent} from './wait/wait.component';

import {SignupRoutingModule} from './signup-routing.module';
import {SharedModule} from '../shared/shared.module';

import { MdCheckboxModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        SharedModule,
        MdCheckboxModule,
        SignupRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule
    ],
    declarations: [
        SignupComponent,
        SecurityCenterComponent,
        CheckEmailComponent,
        WaitComponent
    ]
})

export class SignupModule {

}

