import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBrakeRelaysComponent } from './car-truck-brake-relays.component';

describe('CarTruckBrakeRelaysComponent', () => {
  let component: CarTruckBrakeRelaysComponent;
  let fixture: ComponentFixture<CarTruckBrakeRelaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBrakeRelaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBrakeRelaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
