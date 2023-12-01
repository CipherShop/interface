import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckFanClutchesComponent } from './car-truck-fan-clutches.component';

describe('CarTruckFanClutchesComponent', () => {
  let component: CarTruckFanClutchesComponent;
  let fixture: ComponentFixture<CarTruckFanClutchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckFanClutchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckFanClutchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
