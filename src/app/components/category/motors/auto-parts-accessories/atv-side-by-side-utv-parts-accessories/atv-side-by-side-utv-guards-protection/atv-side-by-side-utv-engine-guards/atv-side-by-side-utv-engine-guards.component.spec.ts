import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineGuardsComponent } from './atv-side-by-side-utv-engine-guards.component';

describe('ATVSideBySideUTVEngineGuardsComponent', () => {
  let component: ATVSideBySideUTVEngineGuardsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineGuardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
