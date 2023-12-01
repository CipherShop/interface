import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckChargingStationsComponent } from './electric-car-truck-charging-stations.component';

describe('ElectricCarTruckChargingStationsComponent', () => {
  let component: ElectricCarTruckChargingStationsComponent;
  let fixture: ComponentFixture<ElectricCarTruckChargingStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckChargingStationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckChargingStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
