import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCarTruckParkingAssistanceComponent } from './other-car-truck-parking-assistance.component';

describe('OtherCarTruckParkingAssistanceComponent', () => {
  let component: OtherCarTruckParkingAssistanceComponent;
  let fixture: ComponentFixture<OtherCarTruckParkingAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCarTruckParkingAssistanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCarTruckParkingAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
