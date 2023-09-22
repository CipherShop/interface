import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAlternatorGeneratorPartsComponent } from './atv-side-by-side-utv-alternator-generator-parts.component';

describe('ATVSideBySideUTVAlternatorGeneratorPartsComponent', () => {
  let component: ATVSideBySideUTVAlternatorGeneratorPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAlternatorGeneratorPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAlternatorGeneratorPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAlternatorGeneratorPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
