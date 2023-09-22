import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVBatteryBMSUnitsComponent } from './electric-atv-sx-s-utv-battery-bms-units.component';

describe('ElectricATVSxSUTVBatteryBMSUnitsComponent', () => {
  let component: ElectricATVSxSUTVBatteryBMSUnitsComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVBatteryBMSUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVBatteryBMSUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVBatteryBMSUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
