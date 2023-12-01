import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckCargoSlidingDoorsComponent } from './car-truck-cargo-sliding-doors.component';

describe('CarTruckCargoSlidingDoorsComponent', () => {
  let component: CarTruckCargoSlidingDoorsComponent;
  let fixture: ComponentFixture<CarTruckCargoSlidingDoorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckCargoSlidingDoorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckCargoSlidingDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
