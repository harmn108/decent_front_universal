import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MdIconModule} from '@angular/material';

import {StarRateComponent} from './star-rate.component';


describe('StarRateComponent', () => {
    let component: StarRateComponent;
    let fixture: ComponentFixture<StarRateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StarRateComponent],
            imports: [MdIconModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StarRateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
