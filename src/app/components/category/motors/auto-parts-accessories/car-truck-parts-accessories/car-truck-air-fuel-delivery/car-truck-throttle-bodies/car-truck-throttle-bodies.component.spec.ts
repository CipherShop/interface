import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckThrottleBodiesComponent } from './car-truck-throttle-bodies.component';

describe('CarTruckThrottleBodiesComponent', () => {
  let component: CarTruckThrottleBodiesComponent;
  let fixture: ComponentFixture<CarTruckThrottleBodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckThrottleBodiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckThrottleBodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
