import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAccessoryBeltsPartsComponent } from './car-truck-accessory-belts-parts.component';

describe('CarTruckAccessoryBeltsPartsComponent', () => {
  let component: CarTruckAccessoryBeltsPartsComponent;
  let fixture: ComponentFixture<CarTruckAccessoryBeltsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAccessoryBeltsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAccessoryBeltsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
