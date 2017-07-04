import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EnterEmailComponent} from './enter-email.component';

import {SharedModule} from '../../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccountService} from '../../core/services/account.service';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {CryptService} from '../../core/services/crypt.service';
import {DecentCoreService} from '../../core/services/decent-core.service';
// import {AuthService} from '../../core/services/auth.service';

describe('EnterEmailComponent', () => {
    let component: EnterEmailComponent;
    let fixture: ComponentFixture<EnterEmailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EnterEmailComponent],
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
        fixture = TestBed.createComponent(EnterEmailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
