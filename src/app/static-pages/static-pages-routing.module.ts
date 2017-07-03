import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplateComponent} from '../shared/template/template.component';
import {CookiesPolicyComponent} from './cookies-policy/cookies-policy.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {DmcaComponent} from './dmca/dmca.component';
import {TermsOfUseComponent} from "./terms-of-use/terms-of-use.component";
import {DataProcessingComponent} from "./data-processing/data-processing.component";
import {StaticTemplateComponent} from "../shared/static-template/static-template.component";

const routes: Routes = [
    {
        path: '',
        component: StaticTemplateComponent,
        children: [
            {
                path: 'cookies-policy',
                pathMatch: 'full',
                component: CookiesPolicyComponent
            },
            {
                path: 'privacy-policy',
                pathMatch: 'prefix',
                component: PrivacyPolicyComponent
            },
            {
                path: 'dmca',
                pathMatch: 'prefix',
                component: DmcaComponent
            },
            {
                path: 'terms-of-use',
                pathMatch: 'prefix',
                component: TermsOfUseComponent
            },
            {
                path: 'data-processing',
                pathMatch: 'prefix',
                component: DataProcessingComponent
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPagesRoutingModule { }
