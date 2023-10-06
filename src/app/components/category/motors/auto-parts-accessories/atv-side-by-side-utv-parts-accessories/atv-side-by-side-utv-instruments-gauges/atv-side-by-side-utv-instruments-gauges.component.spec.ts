import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVInstrumentsGaugesComponent } from './atv-side-by-side-utv-instruments-gauges.component';

describe('ATVSideBySideUTVInstrumentsGaugesComponent', () => {
  let component: ATVSideBySideUTVInstrumentsGaugesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVInstrumentsGaugesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVInstrumentsGaugesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVInstrumentsGaugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
