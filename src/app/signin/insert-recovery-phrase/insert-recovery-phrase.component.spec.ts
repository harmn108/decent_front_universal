import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InsertRecoveryPhraseComponent} from './insert-recovery-phrase.component';
import {SharedModule} from '../../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccountService} from '../../core/services/account.service';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {CryptService} from '../../core/services/crypt.service';
import {DecentCoreService} from '../../core/services/decent-core.service';
// import {AuthService} from '../../core/services/auth.service';

describe('InsertRecoveryPhraseComponent', () => {
    let component: InsertRecoveryPhraseComponent;
    let fixture: ComponentFixture<InsertRecoveryPhraseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InsertRecoveryPhraseComponent],
            imports: [
                SharedModule,
                HttpModule,
                RouterTestingModule,
                BrowserAnimationsModule
            ],
            providers: [AccountService, CryptService, DecentCoreService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InsertRecoveryPhraseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
