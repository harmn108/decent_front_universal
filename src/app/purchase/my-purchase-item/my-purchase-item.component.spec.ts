import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPurchaseItemComponent } from './my-purchase-item.component';

describe('MyPurchaseItemComponent', () => {
  let component: MyPurchaseItemComponent;
  let fixture: ComponentFixture<MyPurchaseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPurchaseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPurchaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
