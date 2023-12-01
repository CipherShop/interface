import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckExpansionOverflowTanksComponent } from './car-truck-expansion-overflow-tanks.component';

describe('CarTruckExpansionOverflowTanksComponent', () => {
  let component: CarTruckExpansionOverflowTanksComponent;
  let fixture: ComponentFixture<CarTruckExpansionOverflowTanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckExpansionOverflowTanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckExpansionOverflowTanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
