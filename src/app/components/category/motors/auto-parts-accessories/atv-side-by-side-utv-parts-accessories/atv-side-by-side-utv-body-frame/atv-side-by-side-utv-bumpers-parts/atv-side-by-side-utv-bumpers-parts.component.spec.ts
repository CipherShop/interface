import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBumpersPartsComponent } from './atv-side-by-side-utv-bumpers-parts.component';

describe('ATVSideBySideUTVBumpersPartsComponent', () => {
  let component: ATVSideBySideUTVBumpersPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBumpersPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBumpersPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBumpersPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
