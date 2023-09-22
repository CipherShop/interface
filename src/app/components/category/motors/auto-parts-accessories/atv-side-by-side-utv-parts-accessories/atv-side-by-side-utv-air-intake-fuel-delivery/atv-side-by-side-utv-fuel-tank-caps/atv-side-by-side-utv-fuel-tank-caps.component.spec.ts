import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFuelTankCapsComponent } from './atv-side-by-side-utv-fuel-tank-caps.component';

describe('ATVSideBySideUTVFuelTankCapsComponent', () => {
  let component: ATVSideBySideUTVFuelTankCapsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFuelTankCapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFuelTankCapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFuelTankCapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
