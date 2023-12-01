import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckACPressureSwitchesComponent } from './car-truck-a-c-pressure-switches.component';

describe('CarTruckACPressureSwitchesComponent', () => {
  let component: CarTruckACPressureSwitchesComponent;
  let fixture: ComponentFixture<CarTruckACPressureSwitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckACPressureSwitchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckACPressureSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
