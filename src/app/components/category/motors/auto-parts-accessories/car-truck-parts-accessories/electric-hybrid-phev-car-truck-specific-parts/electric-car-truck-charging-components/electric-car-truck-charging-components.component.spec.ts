import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckChargingComponentsComponent } from './electric-car-truck-charging-components.component';

describe('ElectricCarTruckChargingComponentsComponent', () => {
  let component: ElectricCarTruckChargingComponentsComponent;
  let fixture: ComponentFixture<ElectricCarTruckChargingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckChargingComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckChargingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
