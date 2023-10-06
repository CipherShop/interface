import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFogLightAssembliesComponent } from './atv-side-by-side-utv-fog-light-assemblies.component';

describe('ATVSideBySideUTVFogLightAssembliesComponent', () => {
  let component: ATVSideBySideUTVFogLightAssembliesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFogLightAssembliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFogLightAssembliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFogLightAssembliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
