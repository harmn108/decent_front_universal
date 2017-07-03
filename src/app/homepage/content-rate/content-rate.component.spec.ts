import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContentRateComponent} from './content-rate.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Content} from '../models/content';
import {SharedModule} from '../../shared/shared.module';

describe('ContentRateComponent', () => {
    let component: ContentRateComponent;
    let fixture: ComponentFixture<ContentRateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ContentRateComponent
            ],
            imports: [
                RouterTestingModule,
                SharedModule
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContentRateComponent);
        component = fixture.componentInstance;

        // pretend that it was wired to something that supplied a hero
        const expectedContent = new Content;
        expectedContent.title = 'TestContent title';

        component.content = expectedContent;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
