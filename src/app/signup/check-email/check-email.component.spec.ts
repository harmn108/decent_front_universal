import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CheckEmailComponent} from './check-email.component';
import {SharedModule} from '../../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccountService} from '../../core/services/account.service';
import {HttpModule} from '@angular/http';
import {CryptService} from '../../core/services/crypt.service';
// import {AuthService} from '../../core/services/auth.service';
import {DecentCoreService} from '../../core/services/decent-core.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('CheckEmailComponent', () => {
    let component: CheckEmailComponent;
    let fixture: ComponentFixture<CheckEmailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CheckEmailComponent],
            imports: [
                SharedModule,
                BrowserAnimationsModule,
                HttpModule,
                RouterTestingModule
            ],
            providers: [AccountService, CryptService, DecentCoreService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckEmailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
