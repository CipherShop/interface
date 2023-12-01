import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCarTruckChargingComponentsComponent } from './other-car-truck-charging-components.component';

describe('OtherCarTruckChargingComponentsComponent', () => {
  let component: OtherCarTruckChargingComponentsComponent;
  let fixture: ComponentFixture<OtherCarTruckChargingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCarTruckChargingComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCarTruckChargingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
