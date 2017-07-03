import {TestBed, inject} from '@angular/core/testing';

import {ContentService} from './content.service';
import {DecentCoreService} from './decent-core.service';
import {HttpModule} from '@angular/http';

describe('ContentService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[HttpModule],
            providers: [ContentService, DecentCoreService]
        });
    });

    it('should ...', inject([ContentService], (service: ContentService) => {
        expect(service).toBeTruthy();
    }));
});
