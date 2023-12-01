import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineCoolingGasketsSealsORingsComponent } from './car-truck-engine-cooling-gaskets-seals-o-rings.component';

describe('CarTruckEngineCoolingGasketsSealsORingsComponent', () => {
  let component: CarTruckEngineCoolingGasketsSealsORingsComponent;
  let fixture: ComponentFixture<CarTruckEngineCoolingGasketsSealsORingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineCoolingGasketsSealsORingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineCoolingGasketsSealsORingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
