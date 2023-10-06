import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVHeadlightAssembliesComponent } from './atv-side-by-side-utv-headlight-assemblies.component';

describe('ATVSideBySideUTVHeadlightAssembliesComponent', () => {
  let component: ATVSideBySideUTVHeadlightAssembliesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVHeadlightAssembliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVHeadlightAssembliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVHeadlightAssembliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
