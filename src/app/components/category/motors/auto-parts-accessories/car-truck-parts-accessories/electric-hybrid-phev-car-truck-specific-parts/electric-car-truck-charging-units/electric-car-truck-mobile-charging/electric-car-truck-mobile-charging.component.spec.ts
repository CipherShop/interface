import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckMobileChargingComponent } from './electric-car-truck-mobile-charging.component';

describe('ElectricCarTruckMobileChargingComponent', () => {
  let component: ElectricCarTruckMobileChargingComponent;
  let fixture: ComponentFixture<ElectricCarTruckMobileChargingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckMobileChargingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckMobileChargingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
