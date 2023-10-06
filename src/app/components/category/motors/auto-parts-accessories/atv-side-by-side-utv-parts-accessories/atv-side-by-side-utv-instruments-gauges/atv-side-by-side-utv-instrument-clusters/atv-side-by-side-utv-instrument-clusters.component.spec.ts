import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVInstrumentClustersComponent } from './atv-side-by-side-utv-instrument-clusters.component';

describe('ATVSideBySideUTVInstrumentClustersComponent', () => {
  let component: ATVSideBySideUTVInstrumentClustersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVInstrumentClustersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVInstrumentClustersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVInstrumentClustersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
