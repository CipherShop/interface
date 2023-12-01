import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEmissionGasketsComponent } from './car-truck-emission-gaskets.component';

describe('CarTruckEmissionGasketsComponent', () => {
  let component: CarTruckEmissionGasketsComponent;
  let fixture: ComponentFixture<CarTruckEmissionGasketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEmissionGasketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEmissionGasketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
