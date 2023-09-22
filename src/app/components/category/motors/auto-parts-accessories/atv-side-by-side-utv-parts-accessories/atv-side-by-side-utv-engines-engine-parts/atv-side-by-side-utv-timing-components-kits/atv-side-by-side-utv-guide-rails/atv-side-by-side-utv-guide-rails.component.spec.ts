import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVGuideRailsComponent } from './atv-side-by-side-utv-guide-rails.component';

describe('ATVSideBySideUTVGuideRailsComponent', () => {
  let component: ATVSideBySideUTVGuideRailsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVGuideRailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVGuideRailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVGuideRailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
