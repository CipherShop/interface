import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineGasketsSealsHardwareComponent } from './car-truck-engine-gaskets-seals-hardware.component';

describe('CarTruckEngineGasketsSealsHardwareComponent', () => {
  let component: CarTruckEngineGasketsSealsHardwareComponent;
  let fixture: ComponentFixture<CarTruckEngineGasketsSealsHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineGasketsSealsHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineGasketsSealsHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
