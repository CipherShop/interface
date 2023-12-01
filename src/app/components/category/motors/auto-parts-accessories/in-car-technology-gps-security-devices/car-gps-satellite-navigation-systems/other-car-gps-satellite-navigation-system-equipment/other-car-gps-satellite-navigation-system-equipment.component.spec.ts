import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCarGPSSatelliteNavigationSystemEquipmentComponent } from './other-car-gps-satellite-navigation-system-equipment.component';

describe('OtherCarGPSSatelliteNavigationSystemEquipmentComponent', () => {
  let component: OtherCarGPSSatelliteNavigationSystemEquipmentComponent;
  let fixture: ComponentFixture<OtherCarGPSSatelliteNavigationSystemEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCarGPSSatelliteNavigationSystemEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCarGPSSatelliteNavigationSystemEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
