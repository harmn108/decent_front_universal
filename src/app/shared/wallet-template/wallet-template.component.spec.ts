import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {WalletTemplateComponent} from './wallet-template.component';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
// import {AuthService} from '../../core/services/auth.service';
import {DecentCoreService} from '../../core/services/decent-core.service';
import {CryptService} from '../../core/services/crypt.service';
import {AccountService} from '../../core/services/account.service';
import {HttpModule} from '@angular/http';

describe('WalletTemplateComponent', () => {
    let component: WalletTemplateComponent;
    let fixture: ComponentFixture<WalletTemplateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WalletTemplateComponent, HeaderComponent, FooterComponent],
            imports: [
                HttpModule,
                RouterTestingModule
            ],
            providers: [AccountService, CryptService, DecentCoreService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WalletTemplateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
