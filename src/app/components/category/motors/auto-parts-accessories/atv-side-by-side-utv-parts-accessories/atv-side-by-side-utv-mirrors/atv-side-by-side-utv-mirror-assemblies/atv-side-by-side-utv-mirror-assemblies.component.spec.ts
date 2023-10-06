import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVMirrorAssembliesComponent } from './atv-side-by-side-utv-mirror-assemblies.component';

describe('ATVSideBySideUTVMirrorAssembliesComponent', () => {
  let component: ATVSideBySideUTVMirrorAssembliesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVMirrorAssembliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVMirrorAssembliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVMirrorAssembliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
