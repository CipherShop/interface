import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckVariableValveTimingPartsComponent } from './car-truck-variable-valve-timing-parts.component';

describe('CarTruckVariableValveTimingPartsComponent', () => {
  let component: CarTruckVariableValveTimingPartsComponent;
  let fixture: ComponentFixture<CarTruckVariableValveTimingPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckVariableValveTimingPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckVariableValveTimingPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
