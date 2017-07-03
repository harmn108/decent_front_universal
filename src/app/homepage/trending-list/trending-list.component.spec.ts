import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TrendingListComponent} from './trending-list.component';
import {TrendingItemComponent} from '../trending-item/trending-item.component';
import {ContentRateComponent} from '../content-rate/content-rate.component';
import {DctPipe} from '../../shared/pipes/dct/dct.pipe';
import {StarRateComponent} from '../../shared/star-rate/star-rate.component';
import {ContentService} from '../../core/services/content.service';
import {DecentCoreService} from '../../core/services/decent-core.service';
import {HttpModule} from '@angular/http';
import {SharedModule} from '../../shared/shared.module';


describe('TrendingListComponent', () => {
    let component: TrendingListComponent;
    let fixture: ComponentFixture<TrendingListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TrendingListComponent,
                TrendingItemComponent,
                ContentRateComponent,
                StarRateComponent,
                DctPipe
            ],
            imports: [
                SharedModule,
                HttpModule
            ],
            providers: [
                ContentService,
                DecentCoreService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TrendingListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
