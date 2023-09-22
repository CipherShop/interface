import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAirFiltersComponent } from './atv-side-by-side-utv-air-filters.component';

describe('ATVSideBySideUTVAirFiltersComponent', () => {
  let component: ATVSideBySideUTVAirFiltersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAirFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAirFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAirFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
