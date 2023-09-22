import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineGasketsSealsORingsComponent } from './atv-side-by-side-utv-engine-gaskets-seals-o-rings.component';

describe('ATVSideBySideUTVEngineGasketsSealsORingsComponent', () => {
  let component: ATVSideBySideUTVEngineGasketsSealsORingsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineGasketsSealsORingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineGasketsSealsORingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineGasketsSealsORingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
