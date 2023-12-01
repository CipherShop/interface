import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckFuelInjectorsComponent } from './car-truck-fuel-injectors.component';

describe('CarTruckFuelInjectorsComponent', () => {
  let component: CarTruckFuelInjectorsComponent;
  let fixture: ComponentFixture<CarTruckFuelInjectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckFuelInjectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckFuelInjectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
