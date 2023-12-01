import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckTimingBeltsComponent } from './car-truck-timing-belts.component';

describe('CarTruckTimingBeltsComponent', () => {
  let component: CarTruckTimingBeltsComponent;
  let fixture: ComponentFixture<CarTruckTimingBeltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckTimingBeltsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckTimingBeltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
