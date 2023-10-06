import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTailBrakeLightAssembliesComponent } from './atv-side-by-side-utv-tail-brake-light-assemblies.component';

describe('ATVSideBySideUTVTailBrakeLightAssembliesComponent', () => {
  let component: ATVSideBySideUTVTailBrakeLightAssembliesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTailBrakeLightAssembliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTailBrakeLightAssembliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTailBrakeLightAssembliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
