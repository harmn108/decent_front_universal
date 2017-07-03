import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SigninRoutingModule} from './signin-routing.module';
import {SharedModule} from '../shared/shared.module';

import {LoginComponent} from './login/login.component';
import {AccountRecoveryComponent} from './account-recovery/account-recovery.component';
import {NewPasswordComponent} from './new-password/new-password.component';
import {EnterEmailComponent} from './enter-email/enter-email.component';
import {InsertRecoveryPhraseComponent} from './insert-recovery-phrase/insert-recovery-phrase.component';
import {MyPasswordHintComponent} from './my-password-hint/my-password-hint.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SigninRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    AccountRecoveryComponent,
    NewPasswordComponent,
    EnterEmailComponent,
    InsertRecoveryPhraseComponent,
    MyPasswordHintComponent
  ]
})
export class SigninModule {
}

