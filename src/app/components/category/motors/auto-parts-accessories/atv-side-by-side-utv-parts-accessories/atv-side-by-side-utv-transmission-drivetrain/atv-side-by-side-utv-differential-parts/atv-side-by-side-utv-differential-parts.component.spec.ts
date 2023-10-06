import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVDifferentialPartsComponent } from './atv-side-by-side-utv-differential-parts.component';

describe('ATVSideBySideUTVDifferentialPartsComponent', () => {
  let component: ATVSideBySideUTVDifferentialPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVDifferentialPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVDifferentialPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVDifferentialPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
