import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVGuardsProtectionComponent } from './atv-side-by-side-utv-guards-protection.component';

describe('ATVSideBySideUTVGuardsProtectionComponent', () => {
  let component: ATVSideBySideUTVGuardsProtectionComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVGuardsProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVGuardsProtectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVGuardsProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
