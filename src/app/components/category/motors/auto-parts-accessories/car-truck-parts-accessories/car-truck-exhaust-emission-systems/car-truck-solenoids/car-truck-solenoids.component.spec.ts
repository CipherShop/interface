import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckSolenoidsComponent } from './car-truck-solenoids.component';

describe('CarTruckSolenoidsComponent', () => {
  let component: CarTruckSolenoidsComponent;
  let fixture: ComponentFixture<CarTruckSolenoidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckSolenoidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckSolenoidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
