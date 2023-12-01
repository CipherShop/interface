import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckFrameRailsSubframesComponent } from './car-truck-frame-rails-subframes.component';

describe('CarTruckFrameRailsSubframesComponent', () => {
  let component: CarTruckFrameRailsSubframesComponent;
  let fixture: ComponentFixture<CarTruckFrameRailsSubframesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckFrameRailsSubframesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckFrameRailsSubframesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
