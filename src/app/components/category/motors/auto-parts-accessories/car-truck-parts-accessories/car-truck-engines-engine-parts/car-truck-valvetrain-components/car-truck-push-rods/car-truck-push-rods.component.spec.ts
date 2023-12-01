import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckPushRodsComponent } from './car-truck-push-rods.component';

describe('CarTruckPushRodsComponent', () => {
  let component: CarTruckPushRodsComponent;
  let fixture: ComponentFixture<CarTruckPushRodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckPushRodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckPushRodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
