import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckHVACBlowerModuleResistorComponent } from './car-truck-hvac-blower-module-resistor.component';

describe('CarTruckHVACBlowerModuleResistorComponent', () => {
  let component: CarTruckHVACBlowerModuleResistorComponent;
  let fixture: ComponentFixture<CarTruckHVACBlowerModuleResistorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckHVACBlowerModuleResistorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckHVACBlowerModuleResistorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
