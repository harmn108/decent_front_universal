import {TestBed, inject} from '@angular/core/testing';

import {CryptService} from './crypt.service';
import {DecentCoreService} from './decent-core.service';
// const {Apis, ChainConfig} = require('decentjs-ws/cjs');

describe('CryptService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CryptService, DecentCoreService]
        });


    });

    it('it should work', inject([CryptService], (service: CryptService) => {

        // ChainConfig.address_prefix = 'DCT';


        let genPrivateKey = service.generatePrivateKey('CURVANT GRANO UNWARN FACER PORY TIBIALE KICKOUT WAVER ANARETA TRANSIT TURIO GALAXY BULKER OGEED SOUPLE FULWA');
        let genPublicKey = service.generatePublicKey(genPrivateKey);

        expect(genPrivateKey.toWif()).toEqual('5Joe8CSoQ8TGbRnRns7iBAxTCtTi3SdPmRfcR7VxjLKJVxhu3De');
        expect(genPublicKey).toEqual('DCT5MjLSCyZSikKFqnn2QWGJME1qLu6XsCUif7uC4S5zSxRvntcZ8');

        let signature = service.hashToSign('28f038bfed525a4986afc5f7cedac79967c8c004d511440ff3d8c207dded98c1', genPrivateKey);

        let restoredKey = service.restorePublicKey(signature, '28f038bfed525a4986afc5f7cedac79967c8c004d511440ff3d8c207dded98c1');
        expect(restoredKey).toEqual(genPublicKey);


    }));
});
