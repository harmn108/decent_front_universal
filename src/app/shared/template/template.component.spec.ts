import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {TemplateComponent} from './template.component';
import {HeaderComponent} from '../header/header.component';
// import {AuthService} from '../../core/services/auth.service';
import {DecentCoreService} from '../../core/services/decent-core.service';
import {CryptService} from '../../core/services/crypt.service';
import {AccountService} from '../../core/services/account.service';
import {HttpModule} from '@angular/http';

describe('TemplateComponent', () => {
    let component: TemplateComponent;
    let fixture: ComponentFixture<TemplateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TemplateComponent, HeaderComponent],
            imports: [
                HttpModule,
                RouterTestingModule
            ],
            providers: [AccountService, CryptService, DecentCoreService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TemplateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
