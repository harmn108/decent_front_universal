import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountRecoveryComponent} from './account-recovery.component';
import {SharedModule} from '../../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AccountRecoveryComponent', () => {
    let component: AccountRecoveryComponent;
    let fixture: ComponentFixture<AccountRecoveryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AccountRecoveryComponent],
            imports: [SharedModule, BrowserAnimationsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AccountRecoveryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
