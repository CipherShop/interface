import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVRadiatorOilCoolerGuardsComponent } from './atv-side-by-side-utv-radiator-oil-cooler-guards.component';

describe('ATVSideBySideUTVRadiatorOilCoolerGuardsComponent', () => {
  let component: ATVSideBySideUTVRadiatorOilCoolerGuardsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVRadiatorOilCoolerGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVRadiatorOilCoolerGuardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVRadiatorOilCoolerGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
