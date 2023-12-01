import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckIntercoolersComponent } from './car-truck-intercoolers.component';

describe('CarTruckIntercoolersComponent', () => {
  let component: CarTruckIntercoolersComponent;
  let fixture: ComponentFixture<CarTruckIntercoolersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckIntercoolersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckIntercoolersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
