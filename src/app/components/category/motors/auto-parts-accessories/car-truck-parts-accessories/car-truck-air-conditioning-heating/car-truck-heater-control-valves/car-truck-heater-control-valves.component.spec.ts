import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckHeaterControlValvesComponent } from './car-truck-heater-control-valves.component';

describe('CarTruckHeaterControlValvesComponent', () => {
  let component: CarTruckHeaterControlValvesComponent;
  let fixture: ComponentFixture<CarTruckHeaterControlValvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckHeaterControlValvesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckHeaterControlValvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
