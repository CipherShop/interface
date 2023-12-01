import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEmissionsHardwareComponentsComponent } from './car-truck-emissions-hardware-components.component';

describe('CarTruckEmissionsHardwareComponentsComponent', () => {
  let component: CarTruckEmissionsHardwareComponentsComponent;
  let fixture: ComponentFixture<CarTruckEmissionsHardwareComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEmissionsHardwareComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEmissionsHardwareComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
