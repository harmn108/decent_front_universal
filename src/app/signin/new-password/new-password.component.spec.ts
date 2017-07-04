import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewPasswordComponent} from './new-password.component';

import {SharedModule} from '../../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccountService} from '../../core/services/account.service';
import {HttpModule} from '@angular/http';
import {CryptService} from '../../core/services/crypt.service';
import {RouterTestingModule} from '@angular/router/testing';
import {DecentCoreService} from '../../core/services/decent-core.service';
// import {AuthService} from '../../core/services/auth.service';

describe('NewPasswordComponent', () => {
    let component: NewPasswordComponent;
    let fixture: ComponentFixture<NewPasswordComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewPasswordComponent],
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
        fixture = TestBed.createComponent(NewPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create new component', () => {
        expect(component).toBeTruthy();
    });
});
