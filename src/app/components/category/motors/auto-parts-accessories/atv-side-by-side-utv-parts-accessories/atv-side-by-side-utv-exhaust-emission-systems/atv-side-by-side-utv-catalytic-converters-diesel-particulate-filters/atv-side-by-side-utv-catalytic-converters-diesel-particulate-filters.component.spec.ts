import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCatalyticConvertersDieselParticulateFiltersComponent } from './atv-side-by-side-utv-catalytic-converters-diesel-particulate-filters.component';

describe('ATVSideBySideUTVCatalyticConvertersDieselParticulateFiltersComponent', () => {
  let component: ATVSideBySideUTVCatalyticConvertersDieselParticulateFiltersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCatalyticConvertersDieselParticulateFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCatalyticConvertersDieselParticulateFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCatalyticConvertersDieselParticulateFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
