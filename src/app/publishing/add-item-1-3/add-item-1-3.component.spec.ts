import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItem13Component } from './add-item-1-3.component';

describe('AddItem13Component', () => {
  let component: AddItem13Component;
  let fixture: ComponentFixture<AddItem13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItem13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItem13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
