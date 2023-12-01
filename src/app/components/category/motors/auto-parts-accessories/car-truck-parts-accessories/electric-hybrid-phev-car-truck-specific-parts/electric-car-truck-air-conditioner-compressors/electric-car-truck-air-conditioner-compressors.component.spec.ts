import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckAirConditionerCompressorsComponent } from './electric-car-truck-air-conditioner-compressors.component';

describe('ElectricCarTruckAirConditionerCompressorsComponent', () => {
  let component: ElectricCarTruckAirConditionerCompressorsComponent;
  let fixture: ComponentFixture<ElectricCarTruckAirConditionerCompressorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckAirConditionerCompressorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckAirConditionerCompressorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
