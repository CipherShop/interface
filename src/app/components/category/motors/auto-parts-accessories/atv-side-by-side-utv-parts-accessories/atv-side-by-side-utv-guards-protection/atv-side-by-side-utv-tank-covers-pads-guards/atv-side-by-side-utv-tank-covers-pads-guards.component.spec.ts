import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTankCoversPadsGuardsComponent } from './atv-side-by-side-utv-tank-covers-pads-guards.component';

describe('ATVSideBySideUTVTankCoversPadsGuardsComponent', () => {
  let component: ATVSideBySideUTVTankCoversPadsGuardsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTankCoversPadsGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTankCoversPadsGuardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTankCoversPadsGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
