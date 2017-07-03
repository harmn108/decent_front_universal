/**
 * Created by vaz on 5/9/17.
 */

import {NgModule} from '@angular/core';

import {
    MdMenuModule, MdInputModule, MdSelectModule, MdChipsModule, MdDialogModule, MdSnackBarModule, MdButtonModule,
    MdToolbarModule, MdIconModule, MdRadioModule, MdProgressBarModule, MdDatepickerModule, MdProgressSpinnerModule
} from '@angular/material';
import {ClickOutsideModule} from 'ng-click-outside';
import {FlexLayoutModule} from '@angular/flex-layout';

import {DctPipe} from './pipes/dct/dct.pipe';
import {StarRateComponent} from './star-rate/star-rate.component';
// import {IpfsServiceService} from './ipfs-service/ipfs-service.service';
// import {AesServiceService} from './aes-service/aes-service.service';
// import {ContentManagerService, ContentObject} from './content-manager/content-manager.service';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {TemplateComponent} from './template/template.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {DecentCoreService} from '../core/services/decent-core.service';
import {ControlMessagesComponent} from '../validator/control';
import {ContentListItemComponent} from './content-list-item/content-list-item.component';
import {FooterComponent} from './footer/footer.component';
import {WalletTemplateComponent} from './wallet-template/wallet-template.component';

// import {CoreModule} from '../core/core.module';
import {DropdownDirective} from './dropdown.directive';
import {RecoveryPhraseComponent} from './recovery-phrase/recovery-phrase.component';
import {PasswordHintComponent} from './password-hint/password-hint.component';
import {SearchTemplateComponent} from './search-template/search-template.component';
import { StaticTemplateComponent } from './static-template/static-template.component';
@NgModule({
    
    declarations: [
        StarRateComponent,
        DctPipe,
        TemplateComponent,
        HeaderComponent,
        ContentListItemComponent,
        ControlMessagesComponent,
        FooterComponent,
        WalletTemplateComponent,
        DropdownDirective,
        RecoveryPhraseComponent,
        PasswordHintComponent,
        SearchTemplateComponent,
        StaticTemplateComponent
    ],
    imports: [
        CommonModule,
        MdDialogModule,
        MdInputModule,
        MdMenuModule,
        MdSelectModule,
        MdChipsModule,
        MdSnackBarModule,
        MdProgressSpinnerModule,
        MdButtonModule,
        MdToolbarModule,
        MdIconModule,
        MdRadioModule,
        MdProgressBarModule,
        MdDatepickerModule,
        FlexLayoutModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ClickOutsideModule
    ],
    providers: [
        // IpfsServiceService,
        // AesServiceService,
        // ContentObject
        // ContentManagerService
    ],
    exports: [
        MdDialogModule,
        MdInputModule,
        MdMenuModule,
        MdSelectModule,
        MdChipsModule,
        MdSnackBarModule,
        MdProgressSpinnerModule,
        MdButtonModule,
        MdToolbarModule,
        MdIconModule,
        MdRadioModule,
        FlexLayoutModule,
        MdProgressBarModule,
        FormsModule,
        ReactiveFormsModule,
        ClickOutsideModule,
        DctPipe,
        StarRateComponent,
        TemplateComponent,
        HeaderComponent,
        ControlMessagesComponent,
        ContentListItemComponent,
        FooterComponent,
        WalletTemplateComponent,
        DropdownDirective,
        RecoveryPhraseComponent,
        PasswordHintComponent,
        SearchTemplateComponent,
        StaticTemplateComponent
    ]
})

export class SharedModule {
}
