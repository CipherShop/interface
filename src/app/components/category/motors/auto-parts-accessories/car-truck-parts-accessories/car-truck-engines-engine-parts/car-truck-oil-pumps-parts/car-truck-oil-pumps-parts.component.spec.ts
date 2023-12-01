import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckOilPumpsPartsComponent } from './car-truck-oil-pumps-parts.component';

describe('CarTruckOilPumpsPartsComponent', () => {
  let component: CarTruckOilPumpsPartsComponent;
  let fixture: ComponentFixture<CarTruckOilPumpsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckOilPumpsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckOilPumpsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
