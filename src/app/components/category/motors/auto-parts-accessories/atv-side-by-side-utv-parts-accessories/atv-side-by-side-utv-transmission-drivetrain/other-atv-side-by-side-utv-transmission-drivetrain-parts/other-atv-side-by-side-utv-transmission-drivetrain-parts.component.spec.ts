import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVTransmissionDrivetrainPartsComponent } from './other-atv-side-by-side-utv-transmission-drivetrain-parts.component';

describe('OtherATVSideBySideUTVTransmissionDrivetrainPartsComponent', () => {
  let component: OtherATVSideBySideUTVTransmissionDrivetrainPartsComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVTransmissionDrivetrainPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVTransmissionDrivetrainPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVTransmissionDrivetrainPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
