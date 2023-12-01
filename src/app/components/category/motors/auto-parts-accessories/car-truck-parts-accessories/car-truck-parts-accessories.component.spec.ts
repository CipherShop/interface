import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckPartsAccessoriesComponent } from './car-truck-parts-accessories.component';

describe('CarTruckPartsAccessoriesComponent', () => {
  let component: CarTruckPartsAccessoriesComponent;
  let fixture: ComponentFixture<CarTruckPartsAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckPartsAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckPartsAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
