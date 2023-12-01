import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckCrankshaftsComponent } from './car-truck-crankshafts.component';

describe('CarTruckCrankshaftsComponent', () => {
  let component: CarTruckCrankshaftsComponent;
  let fixture: ComponentFixture<CarTruckCrankshaftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckCrankshaftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckCrankshaftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
