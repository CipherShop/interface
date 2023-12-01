import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckOilPansComponent } from './car-truck-oil-pans.component';

describe('CarTruckOilPansComponent', () => {
  let component: CarTruckOilPansComponent;
  let fixture: ComponentFixture<CarTruckOilPansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckOilPansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckOilPansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
