import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WaitComponent} from './wait.component';
import {AccountService} from '../../core/services/account.service';
import {HttpModule} from '@angular/http';
import {SharedModule} from '../../shared/shared.module';
import {CryptService} from '../../core/services/crypt.service';
import {RouterTestingModule} from '@angular/router/testing';
import {DecentCoreService} from '../../core/services/decent-core.service';
// import {AuthService} from '../../core/services/auth.service';

describe('WaitComponent', () => {
    let component: WaitComponent;
    let fixture: ComponentFixture<WaitComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WaitComponent],
            imports: [
                HttpModule,
                SharedModule,
                RouterTestingModule
            ],
            providers: [AccountService, CryptService, DecentCoreService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WaitComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
