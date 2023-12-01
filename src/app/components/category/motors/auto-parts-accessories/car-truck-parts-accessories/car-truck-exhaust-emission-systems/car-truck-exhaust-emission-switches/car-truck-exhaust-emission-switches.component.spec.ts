import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckExhaustEmissionSwitchesComponent } from './car-truck-exhaust-emission-switches.component';

describe('CarTruckExhaustEmissionSwitchesComponent', () => {
  let component: CarTruckExhaustEmissionSwitchesComponent;
  let fixture: ComponentFixture<CarTruckExhaustEmissionSwitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckExhaustEmissionSwitchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckExhaustEmissionSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
