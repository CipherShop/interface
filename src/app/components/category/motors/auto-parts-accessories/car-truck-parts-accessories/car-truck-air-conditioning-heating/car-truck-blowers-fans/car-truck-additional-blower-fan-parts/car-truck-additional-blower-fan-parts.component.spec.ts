import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAdditionalBlowerFanPartsComponent } from './car-truck-additional-blower-fan-parts.component';

describe('CarTruckAdditionalBlowerFanPartsComponent', () => {
  let component: CarTruckAdditionalBlowerFanPartsComponent;
  let fixture: ComponentFixture<CarTruckAdditionalBlowerFanPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAdditionalBlowerFanPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAdditionalBlowerFanPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
