/**
 * Created by vaz on 5/9/17.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SignupComponent} from './signup/signup.component';
import {SecurityCenterComponent} from './security-center/security-center.component';
import {RecoveryPhraseComponent} from '../shared/recovery-phrase/recovery-phrase.component';
import {PasswordHintComponent} from '../shared/password-hint/password-hint.component';
import {TemplateComponent} from '../shared/template/template.component';
import {CheckEmailComponent} from './check-email/check-email.component';
import {WaitComponent} from './wait/wait.component';

import {HintGuard} from '../guards/hint/hint.guard';
import {RecoveryPhraseGuard} from '../guards/recovery-phrase/recovery-phrase.guard';

const routes: Routes = [
        {
            path: '',
            component: TemplateComponent,
            children: [
                {
                    path: '',
                    pathMatch: 'full',
                    component: SignupComponent
                },
                {
                    path: 'confirmation/:code',
                    pathMatch: 'prefix',
                    component: SecurityCenterComponent
                },
                {
                    path: 'add-recovery-phrase',
                    component: RecoveryPhraseComponent,
                    canActivate: [RecoveryPhraseGuard]
                },
                {
                    path: 'password-hint',
                    component: PasswordHintComponent,
                    canActivate: [HintGuard]
                },
                {
                    path: 'check-email',
                    component: CheckEmailComponent
                },
                {
                    path: 'wait',
                    component: WaitComponent,
                    canActivate: [RecoveryPhraseGuard]
                }
            ]
        }
    ]
;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignupRoutingModule {
}
