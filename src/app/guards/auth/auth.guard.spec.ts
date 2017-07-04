import {TestBed, async, inject} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
// import {AuthService} from '../../core/services/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AccountService} from '../../core/services/account.service';
import {HttpModule} from '@angular/http';
import {CryptService} from '../../core/services/crypt.service';
import {DecentCoreService} from '../../core/services/decent-core.service';

describe('AuthGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpModule
            ],
            providers: [AuthGuard, AccountService, CryptService, DecentCoreService]
        });
    });

    it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
        expect(guard).toBeTruthy();
    }));
});
