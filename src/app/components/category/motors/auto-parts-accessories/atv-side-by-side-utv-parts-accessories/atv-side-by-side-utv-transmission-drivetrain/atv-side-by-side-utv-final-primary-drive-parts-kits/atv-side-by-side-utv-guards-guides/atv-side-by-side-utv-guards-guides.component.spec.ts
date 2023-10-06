import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVGuardsGuidesComponent } from './atv-side-by-side-utv-guards-guides.component';

describe('ATVSideBySideUTVGuardsGuidesComponent', () => {
  let component: ATVSideBySideUTVGuardsGuidesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVGuardsGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVGuardsGuidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVGuardsGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
