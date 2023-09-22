import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFuelPumpsSendingUnitsComponent } from './atv-side-by-side-utv-fuel-pumps-sending-units.component';

describe('ATVSideBySideUTVFuelPumpsSendingUnitsComponent', () => {
  let component: ATVSideBySideUTVFuelPumpsSendingUnitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFuelPumpsSendingUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFuelPumpsSendingUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFuelPumpsSendingUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
