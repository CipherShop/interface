import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckACExpansionValvesComponent } from './car-truck-a-c-expansion-valves.component';

describe('CarTruckACExpansionValvesComponent', () => {
  let component: CarTruckACExpansionValvesComponent;
  let fixture: ComponentFixture<CarTruckACExpansionValvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckACExpansionValvesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckACExpansionValvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
