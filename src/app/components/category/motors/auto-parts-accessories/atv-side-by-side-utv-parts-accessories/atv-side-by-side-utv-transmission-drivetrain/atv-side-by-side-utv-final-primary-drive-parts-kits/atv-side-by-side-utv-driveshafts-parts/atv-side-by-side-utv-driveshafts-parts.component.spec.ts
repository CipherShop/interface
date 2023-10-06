import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVDriveshaftsPartsComponent } from './atv-side-by-side-utv-driveshafts-parts.component';

describe('ATVSideBySideUTVDriveshaftsPartsComponent', () => {
  let component: ATVSideBySideUTVDriveshaftsPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVDriveshaftsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVDriveshaftsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVDriveshaftsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
