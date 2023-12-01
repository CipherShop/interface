import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckDrivetrainMotorPartsComponent } from './electric-car-truck-drivetrain-motor-parts.component';

describe('ElectricCarTruckDrivetrainMotorPartsComponent', () => {
  let component: ElectricCarTruckDrivetrainMotorPartsComponent;
  let fixture: ComponentFixture<ElectricCarTruckDrivetrainMotorPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckDrivetrainMotorPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckDrivetrainMotorPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
