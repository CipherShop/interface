import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckVisibleCamerasComponent } from './car-truck-visible-cameras.component';

describe('CarTruckVisibleCamerasComponent', () => {
  let component: CarTruckVisibleCamerasComponent;
  let fixture: ComponentFixture<CarTruckVisibleCamerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckVisibleCamerasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckVisibleCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
