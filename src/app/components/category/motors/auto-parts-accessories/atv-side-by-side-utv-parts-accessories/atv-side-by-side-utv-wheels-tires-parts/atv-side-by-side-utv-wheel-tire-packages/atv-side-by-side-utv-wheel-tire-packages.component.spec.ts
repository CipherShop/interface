import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVWheelTirePackagesComponent } from './atv-side-by-side-utv-wheel-tire-packages.component';

describe('ATVSideBySideUTVWheelTirePackagesComponent', () => {
  let component: ATVSideBySideUTVWheelTirePackagesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVWheelTirePackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVWheelTirePackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVWheelTirePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
