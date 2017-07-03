import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItem33Component } from './add-item-3-3.component';

describe('AddItem33Component', () => {
  let component: AddItem33Component;
  let fixture: ComponentFixture<AddItem33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItem33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItem33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
