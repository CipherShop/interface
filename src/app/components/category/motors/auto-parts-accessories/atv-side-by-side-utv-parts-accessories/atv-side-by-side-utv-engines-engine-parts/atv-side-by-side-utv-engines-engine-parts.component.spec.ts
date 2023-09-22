import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEnginesEnginePartsComponent } from './atv-side-by-side-utv-engines-engine-parts.component';

describe('ATVSideBySideUTVEnginesEnginePartsComponent', () => {
  let component: ATVSideBySideUTVEnginesEnginePartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEnginesEnginePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEnginesEnginePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEnginesEnginePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
