import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../core/services/auth.service';
import {DecentCoreService} from '../../core/services/decent-core.service';
import {CryptService} from '../../core/services/crypt.service';
import {AccountService} from '../../core/services/account.service';
import {HttpModule} from '@angular/http';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [
                HttpModule,
                RouterTestingModule
            ],
            providers: [AccountService, CryptService, AuthService, DecentCoreService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
