import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContentReportComponent} from './content-report.component';
import {MdRadioModule} from '@angular/material';

describe('ContentReportComponent', () => {
    let component: ContentReportComponent;
    let fixture: ComponentFixture<ContentReportComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContentReportComponent],
            imports: [MdRadioModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContentReportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
