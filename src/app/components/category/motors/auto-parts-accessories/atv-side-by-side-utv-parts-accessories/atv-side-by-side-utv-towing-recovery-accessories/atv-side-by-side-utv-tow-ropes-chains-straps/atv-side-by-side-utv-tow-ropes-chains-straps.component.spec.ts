import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTowRopesChainsStrapsComponent } from './atv-side-by-side-utv-tow-ropes-chains-straps.component';

describe('ATVSideBySideUTVTowRopesChainsStrapsComponent', () => {
  let component: ATVSideBySideUTVTowRopesChainsStrapsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTowRopesChainsStrapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTowRopesChainsStrapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTowRopesChainsStrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
