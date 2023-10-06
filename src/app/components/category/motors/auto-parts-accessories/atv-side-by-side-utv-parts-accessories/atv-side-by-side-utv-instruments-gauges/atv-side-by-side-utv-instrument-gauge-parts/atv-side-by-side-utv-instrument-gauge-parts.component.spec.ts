import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVInstrumentGaugePartsComponent } from './atv-side-by-side-utv-instrument-gauge-parts.component';

describe('ATVSideBySideUTVInstrumentGaugePartsComponent', () => {
  let component: ATVSideBySideUTVInstrumentGaugePartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVInstrumentGaugePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVInstrumentGaugePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVInstrumentGaugePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
