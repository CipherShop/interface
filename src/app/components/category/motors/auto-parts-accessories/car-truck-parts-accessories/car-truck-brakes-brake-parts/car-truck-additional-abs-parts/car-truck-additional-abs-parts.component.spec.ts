import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAdditionalABSPartsComponent } from './car-truck-additional-abs-parts.component';

describe('CarTruckAdditionalABSPartsComponent', () => {
  let component: CarTruckAdditionalABSPartsComponent;
  let fixture: ComponentFixture<CarTruckAdditionalABSPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAdditionalABSPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAdditionalABSPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
