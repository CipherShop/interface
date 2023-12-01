import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckSuperchargersPartsComponent } from './car-truck-superchargers-parts.component';

describe('CarTruckSuperchargersPartsComponent', () => {
  let component: CarTruckSuperchargersPartsComponent;
  let fixture: ComponentFixture<CarTruckSuperchargersPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckSuperchargersPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckSuperchargersPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
