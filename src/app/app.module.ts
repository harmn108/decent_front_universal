import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {AccountService} from './core/services/account.service';

/* Routing Module */
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {HomepageModule} from './homepage/homepage.module';
import {TranslateModule, TranslateStaticLoader, TranslateLoader, TranslateService} from 'ng2-translate';
import {CryptService} from './core/services/crypt.service';
import {ValidationService} from './validator/validator';
import {HintGuard} from './guards/hint/hint.guard';
import {RecoveryPhraseGuard} from './guards/recovery-phrase/recovery-phrase.guard';
import {HavePhraseGuard} from './guards/have-phrase/have-phrase.guard';
import {AuthGuard} from './guards/auth/auth.guard';
import {HaveEmailGuard} from './guards/have-email/have-email.guard';

import {
    MdButtonModule

} from '@angular/material';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'decent-store'}),
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        CoreModule,
        MdButtonModule,
        HomepageModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
    ],
    bootstrap: [AppComponent],
    providers: [
        // AccountService,
        // CryptService,
        ValidationService,
        HintGuard,
        RecoveryPhraseGuard,
        HavePhraseGuard,
        AuthGuard,
        HaveEmailGuard,
        TranslateService,
        // AuthService
    ],
    exports: [
        MdButtonModule
    ]
})

export class AppModule {
}
