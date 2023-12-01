import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBrakeBoostersComponent } from './car-truck-brake-boosters.component';

describe('CarTruckBrakeBoostersComponent', () => {
  let component: CarTruckBrakeBoostersComponent;
  let fixture: ComponentFixture<CarTruckBrakeBoostersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBrakeBoostersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBrakeBoostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
