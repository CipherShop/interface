import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckTimingChainsComponent } from './car-truck-timing-chains.component';

describe('CarTruckTimingChainsComponent', () => {
  let component: CarTruckTimingChainsComponent;
  let fixture: ComponentFixture<CarTruckTimingChainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckTimingChainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckTimingChainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
