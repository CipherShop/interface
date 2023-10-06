import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVInstrumentWiringHarnessesCablesConnectorsComponent } from './atv-side-by-side-utv-instrument-wiring-harnesses-cables-connectors.component';

describe('ATVSideBySideUTVInstrumentWiringHarnessesCablesConnectorsComponent', () => {
  let component: ATVSideBySideUTVInstrumentWiringHarnessesCablesConnectorsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVInstrumentWiringHarnessesCablesConnectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVInstrumentWiringHarnessesCablesConnectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVInstrumentWiringHarnessesCablesConnectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
