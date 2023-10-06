import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalATVSideBySideUTVGuardsProtectionComponent } from './additional-atv-side-by-side-utv-guards-protection.component';

describe('AdditionalATVSideBySideUTVGuardsProtectionComponent', () => {
  let component: AdditionalATVSideBySideUTVGuardsProtectionComponent;
  let fixture: ComponentFixture<AdditionalATVSideBySideUTVGuardsProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalATVSideBySideUTVGuardsProtectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalATVSideBySideUTVGuardsProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
