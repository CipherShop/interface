import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckDrivetrainMotorsPartsComponent } from './electric-car-truck-drivetrain-motors-parts.component';

describe('ElectricCarTruckDrivetrainMotorsPartsComponent', () => {
  let component: ElectricCarTruckDrivetrainMotorsPartsComponent;
  let fixture: ComponentFixture<ElectricCarTruckDrivetrainMotorsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckDrivetrainMotorsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckDrivetrainMotorsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
