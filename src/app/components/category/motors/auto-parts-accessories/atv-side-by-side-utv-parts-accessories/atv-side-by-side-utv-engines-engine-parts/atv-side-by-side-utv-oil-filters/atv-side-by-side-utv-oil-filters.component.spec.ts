import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVOilFiltersComponent } from './atv-side-by-side-utv-oil-filters.component';

describe('ATVSideBySideUTVOilFiltersComponent', () => {
  let component: ATVSideBySideUTVOilFiltersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVOilFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVOilFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVOilFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
