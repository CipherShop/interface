import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTransmissionDrivetrainComponent } from './atv-side-by-side-utv-transmission-drivetrain.component';

describe('ATVSideBySideUTVTransmissionDrivetrainComponent', () => {
  let component: ATVSideBySideUTVTransmissionDrivetrainComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTransmissionDrivetrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTransmissionDrivetrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTransmissionDrivetrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
