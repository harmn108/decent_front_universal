import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PasswordHintComponent} from './password-hint.component';
import {SharedModule} from '../shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccountService} from '../../core/services/account.service';
import {Http, HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {CryptService} from '../../core/services/crypt.service';
import {DecentCoreService} from '../../core/services/decent-core.service';
import {AuthService} from '../../core/services/auth.service';

describe('PasswordHintComponent', () => {
    let component: PasswordHintComponent;
    let fixture: ComponentFixture<PasswordHintComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PasswordHintComponent],
            imports: [SharedModule,
                BrowserAnimationsModule,
                RouterTestingModule,
                HttpModule
            ],
            providers: [AccountService, CryptService, DecentCoreService, AuthService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PasswordHintComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
