import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchComponent} from './search.component';
import {FooterComponent} from '../../shared/footer/footer.component';
import {ContentListItemComponent} from '../../shared/content-list-item/content-list-item.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ContentService} from '../../core/services/content.service';
import {DecentCoreService} from '../../core/services/decent-core.service';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchComponent, ContentListItemComponent, FooterComponent],
            imports: [RouterTestingModule],
            providers: [ContentService, DecentCoreService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
