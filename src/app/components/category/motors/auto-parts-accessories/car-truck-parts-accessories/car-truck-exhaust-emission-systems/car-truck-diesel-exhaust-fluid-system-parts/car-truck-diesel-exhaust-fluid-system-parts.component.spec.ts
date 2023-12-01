import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckDieselExhaustFluidSystemPartsComponent } from './car-truck-diesel-exhaust-fluid-system-parts.component';

describe('CarTruckDieselExhaustFluidSystemPartsComponent', () => {
  let component: CarTruckDieselExhaustFluidSystemPartsComponent;
  let fixture: ComponentFixture<CarTruckDieselExhaustFluidSystemPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckDieselExhaustFluidSystemPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckDieselExhaustFluidSystemPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
