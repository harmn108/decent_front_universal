/**
 * Created by vaz on 5/9/17.
 */

import {NgModule} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {TemplateComponent} from '../shared/template/template.component';
import {AccountRecoveryComponent} from './account-recovery/account-recovery.component';
import {NewPasswordComponent} from './new-password/new-password.component';
import {EnterEmailComponent} from './enter-email/enter-email.component';
import {InsertRecoveryPhraseComponent} from './insert-recovery-phrase/insert-recovery-phrase.component';
import {MyPasswordHintComponent} from 'app/signin/my-password-hint/my-password-hint.component';
import {HavePhraseGuard} from '../guards/have-phrase/have-phrase.guard';
import {HaveEmailGuard} from '../guards/have-email/have-email.guard';

const routes: Routes = [
        {
            path: '',
            component: TemplateComponent,
            children: [
                {
                    path: '',
                    pathMatch: 'full',
                    component: LoginComponent
                },
                {
                    path: 'account-recovery',
                    component: AccountRecoveryComponent
                },
                {
                    path: 'new-password',
                    component: NewPasswordComponent,
                    canActivate: [HavePhraseGuard]
                },
                {
                    path: 'enter-email',
                    component: EnterEmailComponent
                },
                {
                    path: 'insert-recovery-phrase',
                    component: InsertRecoveryPhraseComponent
                },
                {
                    path: 'my-password-hint',
                    component: MyPasswordHintComponent,
                    canActivate: [HaveEmailGuard]
                }
            ]
        }
    ]
;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SigninRoutingModule {
}