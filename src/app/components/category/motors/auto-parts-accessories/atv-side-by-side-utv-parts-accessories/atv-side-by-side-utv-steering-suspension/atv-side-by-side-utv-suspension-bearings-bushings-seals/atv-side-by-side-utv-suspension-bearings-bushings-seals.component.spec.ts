import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSuspensionBearingsBushingsSealsComponent } from './atv-side-by-side-utv-suspension-bearings-bushings-seals.component';

describe('ATVSideBySideUTVSuspensionBearingsBushingsSealsComponent', () => {
  let component: ATVSideBySideUTVSuspensionBearingsBushingsSealsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSuspensionBearingsBushingsSealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSuspensionBearingsBushingsSealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSuspensionBearingsBushingsSealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
