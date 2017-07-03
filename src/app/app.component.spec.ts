import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';

import {RouterTestingModule} from '@angular/router/testing';
import {AccountService} from './core/services/account.service';
import {TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import {Http} from '@angular/http';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                RouterTestingModule,
                [TranslateModule.forRoot({
                    provide: TranslateLoader,
                    useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
                    deps: [Http]
                })]
            ],
            providers: [
                AccountService,
                TranslateService
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
