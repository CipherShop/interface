import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckBatteryManagementSystemsBMSComponent } from './electric-car-truck-battery-management-systems-bms.component';

describe('ElectricCarTruckBatteryManagementSystemsBMSComponent', () => {
  let component: ElectricCarTruckBatteryManagementSystemsBMSComponent;
  let fixture: ComponentFixture<ElectricCarTruckBatteryManagementSystemsBMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckBatteryManagementSystemsBMSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckBatteryManagementSystemsBMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
