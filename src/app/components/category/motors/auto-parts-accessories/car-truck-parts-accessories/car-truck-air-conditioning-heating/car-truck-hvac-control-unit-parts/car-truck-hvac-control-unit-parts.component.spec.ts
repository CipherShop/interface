import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckHVACControlUnitPartsComponent } from './car-truck-hvac-control-unit-parts.component';

describe('CarTruckHVACControlUnitPartsComponent', () => {
  let component: CarTruckHVACControlUnitPartsComponent;
  let fixture: ComponentFixture<CarTruckHVACControlUnitPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckHVACControlUnitPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckHVACControlUnitPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
