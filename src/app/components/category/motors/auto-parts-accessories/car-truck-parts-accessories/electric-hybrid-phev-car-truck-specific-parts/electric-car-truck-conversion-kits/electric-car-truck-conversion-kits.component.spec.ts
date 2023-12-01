import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckConversionKitsComponent } from './electric-car-truck-conversion-kits.component';

describe('ElectricCarTruckConversionKitsComponent', () => {
  let component: ElectricCarTruckConversionKitsComponent;
  let fixture: ComponentFixture<ElectricCarTruckConversionKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckConversionKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckConversionKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
