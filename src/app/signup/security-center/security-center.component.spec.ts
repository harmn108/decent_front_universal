import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SecurityCenterComponent} from './security-center.component';
import {AccountService} from '../../core/services/account.service';
import {HttpModule} from '@angular/http';
import {SharedModule} from '../../shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {CryptService} from '../../core/services/crypt.service';
import {DecentCoreService} from '../../core/services/decent-core.service';
// import {AuthService} from '../../core/services/auth.service';

describe('SecurityCenterComponent', () => {
    let component: SecurityCenterComponent;
    let fixture: ComponentFixture<SecurityCenterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SecurityCenterComponent],
            imports: [
                HttpModule,
                SharedModule,
                RouterTestingModule],
            providers: [AccountService, CryptService, DecentCoreService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SecurityCenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
