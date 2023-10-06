import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVHandlebarGuardsProtectionComponent } from './atv-side-by-side-utv-handlebar-guards-protection.component';

describe('ATVSideBySideUTVHandlebarGuardsProtectionComponent', () => {
  let component: ATVSideBySideUTVHandlebarGuardsProtectionComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVHandlebarGuardsProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVHandlebarGuardsProtectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVHandlebarGuardsProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
