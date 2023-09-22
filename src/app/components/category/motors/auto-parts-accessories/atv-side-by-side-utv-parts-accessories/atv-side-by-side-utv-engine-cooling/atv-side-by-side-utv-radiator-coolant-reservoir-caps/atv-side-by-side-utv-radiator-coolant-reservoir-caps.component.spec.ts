import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVRadiatorCoolantReservoirCapsComponent } from './atv-side-by-side-utv-radiator-coolant-reservoir-caps.component';

describe('ATVSideBySideUTVRadiatorCoolantReservoirCapsComponent', () => {
  let component: ATVSideBySideUTVRadiatorCoolantReservoirCapsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVRadiatorCoolantReservoirCapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVRadiatorCoolantReservoirCapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVRadiatorCoolantReservoirCapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
