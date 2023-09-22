import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVStatorMagnetoPartsComponent } from './atv-side-by-side-utv-stator-magneto-parts.component';

describe('ATVSideBySideUTVStatorMagnetoPartsComponent', () => {
  let component: ATVSideBySideUTVStatorMagnetoPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVStatorMagnetoPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVStatorMagnetoPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVStatorMagnetoPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
