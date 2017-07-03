import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MdInputModule} from '@angular/material';
import {SecurityComponent} from './security.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../../shared/shared.module';
import {AuthService} from '../../core/services/auth.service';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {AccountService} from '../../core/services/account.service';
import {CryptService} from '../../core/services/crypt.service';
import {DecentCoreService} from '../../core/services/decent-core.service';

describe('SecurityComponent', () => {
    let component: SecurityComponent;
    let fixture: ComponentFixture<SecurityComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SecurityComponent],
            imports: [
                SharedModule,
                BrowserAnimationsModule,
                HttpModule,
                RouterTestingModule
            ],
            providers: [AuthService, AccountService, CryptService, DecentCoreService]
        })
            .compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(SecurityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
