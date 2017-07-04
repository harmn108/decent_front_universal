import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomepageComponent} from './homepage.component';
import {MdSidenavModule} from '@angular/material';
import {TrendingListComponent} from '../trending-list/trending-list.component';
import {TrendingItemComponent} from '../trending-item/trending-item.component';
import {ContentRateComponent} from '../content-rate/content-rate.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContentService} from '../../core/services/content.service';
import {DecentCoreService} from '../../core/services/decent-core.service';
import {SharedModule} from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';
import {RouterTestingModule} from '@angular/router/testing';
// import {AuthService} from '../../core/services/auth.service';
import {HttpModule} from '@angular/http';

describe('HomepageComponent', () => {
    let component: HomepageComponent;
    let fixture: ComponentFixture<HomepageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomepageComponent,
                TrendingListComponent,
                TrendingItemComponent,
                ContentRateComponent
            ],
            imports: [
                BrowserAnimationsModule,
                MdSidenavModule,
                CoreModule,
                SharedModule,
                RouterTestingModule,
                HttpModule
            ],
            providers: [
                ContentService,
                DecentCoreService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomepageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
