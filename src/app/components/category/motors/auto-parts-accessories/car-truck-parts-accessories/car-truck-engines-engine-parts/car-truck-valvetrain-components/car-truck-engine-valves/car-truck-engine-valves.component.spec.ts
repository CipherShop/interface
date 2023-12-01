import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineValvesComponent } from './car-truck-engine-valves.component';

describe('CarTruckEngineValvesComponent', () => {
  let component: CarTruckEngineValvesComponent;
  let fixture: ComponentFixture<CarTruckEngineValvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineValvesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineValvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
