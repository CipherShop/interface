import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVBatteriesBMSChargingUnitsComponent } from './electric-atv-sx-s-utv-batteries-bms-charging-units.component';

describe('ElectricATVSxSUTVBatteriesBMSChargingUnitsComponent', () => {
  let component: ElectricATVSxSUTVBatteriesBMSChargingUnitsComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVBatteriesBMSChargingUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVBatteriesBMSChargingUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVBatteriesBMSChargingUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
