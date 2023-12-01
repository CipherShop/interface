import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineHardwareKitsComponent } from './car-truck-engine-hardware-kits.component';

describe('CarTruckEngineHardwareKitsComponent', () => {
  let component: CarTruckEngineHardwareKitsComponent;
  let fixture: ComponentFixture<CarTruckEngineHardwareKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineHardwareKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineHardwareKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
