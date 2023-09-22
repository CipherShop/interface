import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAirFilterHousingsComponent } from './atv-side-by-side-utv-air-filter-housings.component';

describe('ATVSideBySideUTVAirFilterHousingsComponent', () => {
  let component: ATVSideBySideUTVAirFilterHousingsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAirFilterHousingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAirFilterHousingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAirFilterHousingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
