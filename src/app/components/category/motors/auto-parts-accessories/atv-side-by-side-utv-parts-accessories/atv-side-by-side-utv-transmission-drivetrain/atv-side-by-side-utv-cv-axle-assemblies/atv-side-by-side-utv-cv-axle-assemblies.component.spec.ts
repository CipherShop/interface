import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCVAxleAssembliesComponent } from './atv-side-by-side-utv-cv-axle-assemblies.component';

describe('ATVSideBySideUTVCVAxleAssembliesComponent', () => {
  let component: ATVSideBySideUTVCVAxleAssembliesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCVAxleAssembliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCVAxleAssembliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCVAxleAssembliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
