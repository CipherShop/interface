import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckDoorSealsComponent } from './car-truck-door-seals.component';

describe('CarTruckDoorSealsComponent', () => {
  let component: CarTruckDoorSealsComponent;
  let fixture: ComponentFixture<CarTruckDoorSealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckDoorSealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckDoorSealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
