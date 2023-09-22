import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFuelTanksComponent } from './atv-side-by-side-utv-fuel-tanks.component';

describe('ATVSideBySideUTVFuelTanksComponent', () => {
  let component: ATVSideBySideUTVFuelTanksComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFuelTanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFuelTanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFuelTanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
