import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItem23Component } from './add-item-2-3.component';

describe('AddItem23Component', () => {
  let component: AddItem23Component;
  let fixture: ComponentFixture<AddItem23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItem23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItem23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
