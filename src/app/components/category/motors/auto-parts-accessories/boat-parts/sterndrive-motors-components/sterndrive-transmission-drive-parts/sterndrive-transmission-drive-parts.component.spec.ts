import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterndriveTransmissionDrivePartsComponent } from './sterndrive-transmission-drive-parts.component';

describe('SterndriveTransmissionDrivePartsComponent', () => {
  let component: SterndriveTransmissionDrivePartsComponent;
  let fixture: ComponentFixture<SterndriveTransmissionDrivePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterndriveTransmissionDrivePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterndriveTransmissionDrivePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
