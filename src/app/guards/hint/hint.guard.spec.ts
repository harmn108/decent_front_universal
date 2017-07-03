import {TestBed, async, inject} from '@angular/core/testing';

import {HintGuard} from './hint.guard';
import {AccountService} from '../../core/services/account.service';
import {HttpModule} from '@angular/http';
import {SharedModule} from '../../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CryptService} from '../../core/services/crypt.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../core/services/auth.service';
import {DecentCoreService} from '../../core/services/decent-core.service';

describe('HintGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                SharedModule,
                HttpModule,
                RouterTestingModule
            ],
            providers: [HintGuard, AccountService, CryptService, DecentCoreService, AuthService]
        });
    });

    it('should ...', inject([HintGuard], (guard: HintGuard) => {
        expect(guard).toBeTruthy();
    }));
});
