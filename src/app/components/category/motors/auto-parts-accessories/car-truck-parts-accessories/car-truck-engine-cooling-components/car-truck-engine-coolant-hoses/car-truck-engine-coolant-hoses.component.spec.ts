import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineCoolantHosesComponent } from './car-truck-engine-coolant-hoses.component';

describe('CarTruckEngineCoolantHosesComponent', () => {
  let component: CarTruckEngineCoolantHosesComponent;
  let fixture: ComponentFixture<CarTruckEngineCoolantHosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineCoolantHosesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineCoolantHosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
