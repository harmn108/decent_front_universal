import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningDeleteComponent } from './warning-delete.component';

describe('WarningDeleteComponent', () => {
  let component: WarningDeleteComponent;
  let fixture: ComponentFixture<WarningDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
