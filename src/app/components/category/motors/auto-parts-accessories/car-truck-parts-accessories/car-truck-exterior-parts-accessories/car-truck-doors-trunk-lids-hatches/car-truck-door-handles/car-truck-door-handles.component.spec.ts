import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckDoorHandlesComponent } from './car-truck-door-handles.component';

describe('CarTruckDoorHandlesComponent', () => {
  let component: CarTruckDoorHandlesComponent;
  let fixture: ComponentFixture<CarTruckDoorHandlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckDoorHandlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckDoorHandlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
