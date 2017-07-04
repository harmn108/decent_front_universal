import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RecoveryPhraseComponent} from './recovery-phrase.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../shared.module';
import {AccountService} from '../../core/services/account.service';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {CryptService} from '../../core/services/crypt.service';
import {DecentCoreService} from '../../core/services/decent-core.service';
// import {AuthService} from '../../core/services/auth.service';

describe('RecoveryPhraseComponent', () => {
    let component: RecoveryPhraseComponent;
    let fixture: ComponentFixture<RecoveryPhraseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RecoveryPhraseComponent],
            imports: [
                BrowserAnimationsModule,
                SharedModule,
                HttpModule,
                RouterTestingModule
            ],
            providers: [AccountService, CryptService, DecentCoreService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RecoveryPhraseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
