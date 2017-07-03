import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContentListItemComponent} from './content-list-item.component';
import {ContentService} from '../../core/services/content.service';
import {SharedModule} from '../shared.module';
import {DecentCoreService} from '../../core/services/decent-core.service';
import {HttpModule} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../core/services/auth.service';
import {CryptService} from '../../core/services/crypt.service';
import {AccountService} from '../../core/services/account.service';

describe('ContentListItemComponent', () => {
    let component: ContentListItemComponent;
    let fixture: ComponentFixture<ContentListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContentListItemComponent],
            imports: [
                HttpModule,
                RouterTestingModule
            ],
            providers: [ContentService, DecentCoreService, AccountService, CryptService, AuthService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContentListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
