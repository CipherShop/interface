import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFuelFiltersComponent } from './atv-side-by-side-utv-fuel-filters.component';

describe('ATVSideBySideUTVFuelFiltersComponent', () => {
  let component: ATVSideBySideUTVFuelFiltersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFuelFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFuelFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFuelFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
