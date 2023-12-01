import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckIntakeManifoldsComponent } from './car-truck-intake-manifolds.component';

describe('CarTruckIntakeManifoldsComponent', () => {
  let component: CarTruckIntakeManifoldsComponent;
  let fixture: ComponentFixture<CarTruckIntakeManifoldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckIntakeManifoldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckIntakeManifoldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
