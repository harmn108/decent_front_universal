import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MdInputModule} from '@angular/material';

import {LoginComponent} from './login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../../shared/shared.module';
import {AccountService} from '../../core/services/account.service';
import {HttpModule} from '@angular/http';
import {DecentCoreService} from '../../core/services/decent-core.service';
import {CryptService} from '../../core/services/crypt.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../core/services/auth.service';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        MdInputModule,
        BrowserAnimationsModule,
        SharedModule,
        RouterTestingModule,
        HttpModule
      ],
      providers: [ AccountService, DecentCoreService, CryptService, AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
