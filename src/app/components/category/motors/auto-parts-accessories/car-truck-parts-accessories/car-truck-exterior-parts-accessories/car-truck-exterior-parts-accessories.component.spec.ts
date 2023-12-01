import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckExteriorPartsAccessoriesComponent } from './car-truck-exterior-parts-accessories.component';

describe('CarTruckExteriorPartsAccessoriesComponent', () => {
  let component: CarTruckExteriorPartsAccessoriesComponent;
  let fixture: ComponentFixture<CarTruckExteriorPartsAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckExteriorPartsAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckExteriorPartsAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
