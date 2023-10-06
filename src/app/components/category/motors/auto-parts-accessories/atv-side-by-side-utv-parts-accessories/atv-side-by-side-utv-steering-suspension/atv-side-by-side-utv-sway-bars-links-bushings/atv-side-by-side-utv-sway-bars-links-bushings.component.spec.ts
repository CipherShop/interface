import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSwayBarsLinksBushingsComponent } from './atv-side-by-side-utv-sway-bars-links-bushings.component';

describe('ATVSideBySideUTVSwayBarsLinksBushingsComponent', () => {
  let component: ATVSideBySideUTVSwayBarsLinksBushingsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSwayBarsLinksBushingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSwayBarsLinksBushingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSwayBarsLinksBushingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
