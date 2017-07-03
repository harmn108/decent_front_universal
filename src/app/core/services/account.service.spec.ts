import {TestBed, inject} from '@angular/core/testing';

import {AccountService} from './account.service';
import {HttpModule} from '@angular/http';
import {DecentCoreService} from './decent-core.service';
import {CryptService} from './crypt.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('AccountService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                RouterTestingModule
            ],
            providers: [AccountService, DecentCoreService, CryptService]
        });
    });

    it('should be injected', inject([AccountService], (service: AccountService) => {
        expect(service).toBeTruthy();
    }));
});
