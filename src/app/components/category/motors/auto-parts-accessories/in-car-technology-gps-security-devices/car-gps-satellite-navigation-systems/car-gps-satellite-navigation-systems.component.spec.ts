import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarGPSSatelliteNavigationSystemsComponent } from './car-gps-satellite-navigation-systems.component';

describe('CarGPSSatelliteNavigationSystemsComponent', () => {
  let component: CarGPSSatelliteNavigationSystemsComponent;
  let fixture: ComponentFixture<CarGPSSatelliteNavigationSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarGPSSatelliteNavigationSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarGPSSatelliteNavigationSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
