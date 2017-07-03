import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PurchasesComponent} from './purchases.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';

describe('PurchasesComponent', () => {
    let component: PurchasesComponent;
    let fixture: ComponentFixture<PurchasesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PurchasesComponent ],
            imports: [
                BrowserModule,
                SharedModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PurchasesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
