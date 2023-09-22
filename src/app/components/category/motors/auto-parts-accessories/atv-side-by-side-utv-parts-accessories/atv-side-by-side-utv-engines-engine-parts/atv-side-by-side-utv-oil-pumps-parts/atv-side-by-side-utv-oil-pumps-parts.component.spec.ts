import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVOilPumpsPartsComponent } from './atv-side-by-side-utv-oil-pumps-parts.component';

describe('ATVSideBySideUTVOilPumpsPartsComponent', () => {
  let component: ATVSideBySideUTVOilPumpsPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVOilPumpsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVOilPumpsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVOilPumpsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
