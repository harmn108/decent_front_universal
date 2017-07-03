import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WalletComponent} from './wallet.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../../shared/shared.module';
import {HttpModule} from '@angular/http';
import {AccountService} from '../../core/services/account.service';
import {CoreModule} from '../../core/core.module';

describe('WalletComponent', () => {
    let component: WalletComponent;
    let fixture: ComponentFixture<WalletComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                SharedModule,
                HttpModule,
                CoreModule
            ],
            providers: [AccountService],
            declarations: [WalletComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WalletComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
