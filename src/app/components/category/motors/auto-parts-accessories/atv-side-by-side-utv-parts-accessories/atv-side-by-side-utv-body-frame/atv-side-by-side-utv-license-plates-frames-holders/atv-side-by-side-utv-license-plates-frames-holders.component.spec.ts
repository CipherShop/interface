import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVLicensePlatesFramesHoldersComponent } from './atv-side-by-side-utv-license-plates-frames-holders.component';

describe('ATVSideBySideUTVLicensePlatesFramesHoldersComponent', () => {
  let component: ATVSideBySideUTVLicensePlatesFramesHoldersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVLicensePlatesFramesHoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVLicensePlatesFramesHoldersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVLicensePlatesFramesHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
