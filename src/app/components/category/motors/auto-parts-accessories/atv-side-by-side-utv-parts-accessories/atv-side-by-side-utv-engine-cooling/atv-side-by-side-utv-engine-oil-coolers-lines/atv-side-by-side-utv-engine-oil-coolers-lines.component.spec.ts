import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineOilCoolersLinesComponent } from './atv-side-by-side-utv-engine-oil-coolers-lines.component';

describe('ATVSideBySideUTVEngineOilCoolersLinesComponent', () => {
  let component: ATVSideBySideUTVEngineOilCoolersLinesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineOilCoolersLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineOilCoolersLinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineOilCoolersLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
