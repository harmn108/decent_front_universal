import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileUploadComponent } from './artist-profile-upload.component';

describe('ArtistProfileUploadComponent', () => {
  let component: ArtistProfileUploadComponent;
  let fixture: ComponentFixture<ArtistProfileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistProfileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
