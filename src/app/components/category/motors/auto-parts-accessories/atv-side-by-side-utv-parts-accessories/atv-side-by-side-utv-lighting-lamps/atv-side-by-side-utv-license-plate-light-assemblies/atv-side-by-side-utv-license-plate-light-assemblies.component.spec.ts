import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVLicensePlateLightAssembliesComponent } from './atv-side-by-side-utv-license-plate-light-assemblies.component';

describe('ATVSideBySideUTVLicensePlateLightAssembliesComponent', () => {
  let component: ATVSideBySideUTVLicensePlateLightAssembliesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVLicensePlateLightAssembliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVLicensePlateLightAssembliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVLicensePlateLightAssembliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
