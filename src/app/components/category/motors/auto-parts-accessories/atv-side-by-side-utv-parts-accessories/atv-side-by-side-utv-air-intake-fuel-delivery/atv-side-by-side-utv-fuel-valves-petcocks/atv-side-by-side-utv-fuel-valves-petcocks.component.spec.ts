import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFuelValvesPetcocksComponent } from './atv-side-by-side-utv-fuel-valves-petcocks.component';

describe('ATVSideBySideUTVFuelValvesPetcocksComponent', () => {
  let component: ATVSideBySideUTVFuelValvesPetcocksComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFuelValvesPetcocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFuelValvesPetcocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFuelValvesPetcocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
