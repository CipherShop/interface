import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineExpansionOverflowTanksComponent } from './atv-side-by-side-utv-engine-expansion-overflow-tanks.component';

describe('ATVSideBySideUTVEngineExpansionOverflowTanksComponent', () => {
  let component: ATVSideBySideUTVEngineExpansionOverflowTanksComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineExpansionOverflowTanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineExpansionOverflowTanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineExpansionOverflowTanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
