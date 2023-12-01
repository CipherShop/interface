import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckReservoirsCapsComponent } from './car-truck-reservoirs-caps.component';

describe('CarTruckReservoirsCapsComponent', () => {
  let component: CarTruckReservoirsCapsComponent;
  let fixture: ComponentFixture<CarTruckReservoirsCapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckReservoirsCapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckReservoirsCapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
