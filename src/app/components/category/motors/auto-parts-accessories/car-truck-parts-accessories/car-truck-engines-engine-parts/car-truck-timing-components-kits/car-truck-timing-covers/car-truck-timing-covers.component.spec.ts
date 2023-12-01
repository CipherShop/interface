import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckTimingCoversComponent } from './car-truck-timing-covers.component';

describe('CarTruckTimingCoversComponent', () => {
  let component: CarTruckTimingCoversComponent;
  let fixture: ComponentFixture<CarTruckTimingCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckTimingCoversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckTimingCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
