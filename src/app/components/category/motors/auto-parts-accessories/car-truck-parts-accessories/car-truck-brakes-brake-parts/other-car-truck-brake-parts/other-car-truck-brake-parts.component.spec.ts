import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCarTruckBrakePartsComponent } from './other-car-truck-brake-parts.component';

describe('OtherCarTruckBrakePartsComponent', () => {
  let component: OtherCarTruckBrakePartsComponent;
  let fixture: ComponentFixture<OtherCarTruckBrakePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCarTruckBrakePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCarTruckBrakePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
