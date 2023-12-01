import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineThermostatsHousingsComponent } from './car-truck-engine-thermostats-housings.component';

describe('CarTruckEngineThermostatsHousingsComponent', () => {
  let component: CarTruckEngineThermostatsHousingsComponent;
  let fixture: ComponentFixture<CarTruckEngineThermostatsHousingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineThermostatsHousingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineThermostatsHousingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
