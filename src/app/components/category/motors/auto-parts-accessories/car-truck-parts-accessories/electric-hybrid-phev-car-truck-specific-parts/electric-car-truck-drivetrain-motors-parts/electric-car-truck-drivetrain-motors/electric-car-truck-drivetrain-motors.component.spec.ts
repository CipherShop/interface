import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckDrivetrainMotorsComponent } from './electric-car-truck-drivetrain-motors.component';

describe('ElectricCarTruckDrivetrainMotorsComponent', () => {
  let component: ElectricCarTruckDrivetrainMotorsComponent;
  let fixture: ComponentFixture<ElectricCarTruckDrivetrainMotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckDrivetrainMotorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckDrivetrainMotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
