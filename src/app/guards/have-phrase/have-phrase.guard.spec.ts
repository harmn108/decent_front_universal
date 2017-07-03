import {TestBed, async, inject} from '@angular/core/testing';

import {HavePhraseGuard} from './have-phrase.guard';
import {AccountService} from '../../core/services/account.service';
import {HttpModule} from '@angular/http';
import {SharedModule} from '../../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CryptService} from '../../core/services/crypt.service';
import {RouterTestingModule} from '@angular/router/testing';
import {DecentCoreService} from '../../core/services/decent-core.service';
import {AuthService} from '../../core/services/auth.service';

describe('HavePhraseGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                SharedModule,
                HttpModule,
                RouterTestingModule
            ],
            providers: [HavePhraseGuard, AccountService, CryptService, DecentCoreService, AuthService]
        });
    });

    it('should ...', inject([HavePhraseGuard], (guard: HavePhraseGuard) => {
        expect(guard).toBeTruthy();
    }));
});
