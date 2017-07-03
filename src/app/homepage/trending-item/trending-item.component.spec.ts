import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TrendingItemComponent} from './trending-item.component';
import {ContentRateComponent} from '../content-rate/content-rate.component';
import {DctPipe} from '../../shared/pipes/dct/dct.pipe';
import { MdDialogModule, MdIconModule} from '@angular/material';
import {StarRateComponent} from '../../shared/star-rate/star-rate.component';
import {Content} from '../models/content';

describe('TrendingItemComponent', () => {
    let component: TrendingItemComponent;
    let fixture: ComponentFixture<TrendingItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TrendingItemComponent,
                ContentRateComponent,
                StarRateComponent,
                DctPipe
            ],
            imports: [
                MdIconModule,
                MdDialogModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TrendingItemComponent);
        component = fixture.componentInstance;

        const content = new Content();
        content.title = 'TestContent title';
        content.price = {
            amount: 100
        };
        
        component.content = content;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
