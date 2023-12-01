import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckOilDrainPlugsFillerCapsDipsticksComponent } from './car-truck-oil-drain-plugs-filler-caps-dipsticks.component';

describe('CarTruckOilDrainPlugsFillerCapsDipsticksComponent', () => {
  let component: CarTruckOilDrainPlugsFillerCapsDipsticksComponent;
  let fixture: ComponentFixture<CarTruckOilDrainPlugsFillerCapsDipsticksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckOilDrainPlugsFillerCapsDipsticksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckOilDrainPlugsFillerCapsDipsticksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
