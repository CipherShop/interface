import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVInstrumentDriveCablesComponent } from './atv-side-by-side-utv-instrument-drive-cables.component';

describe('ATVSideBySideUTVInstrumentDriveCablesComponent', () => {
  let component: ATVSideBySideUTVInstrumentDriveCablesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVInstrumentDriveCablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVInstrumentDriveCablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVInstrumentDriveCablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
