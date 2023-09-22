import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVDashboardsConsolesPartsComponent } from './atv-side-by-side-utv-dashboards-consoles-parts.component';

describe('ATVSideBySideUTVDashboardsConsolesPartsComponent', () => {
  let component: ATVSideBySideUTVDashboardsConsolesPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVDashboardsConsolesPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVDashboardsConsolesPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVDashboardsConsolesPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
