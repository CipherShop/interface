import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVChargingUpgradeKitsComponent } from './electric-atv-sx-s-utv-charging-upgrade-kits.component';

describe('ElectricATVSxSUTVChargingUpgradeKitsComponent', () => {
  let component: ElectricATVSxSUTVChargingUpgradeKitsComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVChargingUpgradeKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVChargingUpgradeKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVChargingUpgradeKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
