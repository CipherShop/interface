import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineGasketsSealsKitsComponent } from './atv-side-by-side-utv-engine-gaskets-seals-kits.component';

describe('ATVSideBySideUTVEngineGasketsSealsKitsComponent', () => {
  let component: ATVSideBySideUTVEngineGasketsSealsKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineGasketsSealsKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineGasketsSealsKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineGasketsSealsKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
