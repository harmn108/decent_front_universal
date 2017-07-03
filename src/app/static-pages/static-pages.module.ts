import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StaticPagesRoutingModule} from './static-pages-routing.module';
import {SharedModule} from "../shared/shared.module";
import {CookiesPolicyComponent} from "./cookies-policy/cookies-policy.component";
import {DataProcessingComponent} from "./data-processing/data-processing.component";
import {DmcaComponent} from "./dmca/dmca.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {TermsOfUseComponent} from "./terms-of-use/terms-of-use.component";

@NgModule({
    imports: [
        CommonModule,
        StaticPagesRoutingModule,
        SharedModule,
    ],
    declarations: [
        CookiesPolicyComponent,
        DataProcessingComponent,
        DmcaComponent,
        PrivacyPolicyComponent,
        TermsOfUseComponent
    ]
})
export class StaticPagesModule {
}
