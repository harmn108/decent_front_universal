import {TestBed, async, inject} from '@angular/core/testing';

import {RecoveryPhraseGuard} from './recovery-phrase.guard';
import {CryptService} from '../../core/services/crypt.service';
import {AccountService} from '../../core/services/account.service';
import {HttpModule} from '@angular/http';
import {SharedModule} from '../../shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {DecentCoreService} from '../../core/services/decent-core.service';
import {AuthService} from '../../core/services/auth.service';

describe('RecoveryPhraseGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                SharedModule,
                RouterTestingModule
            ],
            providers: [RecoveryPhraseGuard, AccountService, CryptService, DecentCoreService, AuthService]
        });
    });

    it('should ...', inject([RecoveryPhraseGuard], (guard: RecoveryPhraseGuard) => {
        expect(guard).toBeTruthy();
    }));
});
