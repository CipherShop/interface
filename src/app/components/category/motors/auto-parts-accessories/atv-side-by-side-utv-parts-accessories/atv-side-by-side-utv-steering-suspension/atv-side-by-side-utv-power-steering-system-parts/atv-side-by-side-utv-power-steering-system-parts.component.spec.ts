import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVPowerSteeringSystemPartsComponent } from './atv-side-by-side-utv-power-steering-system-parts.component';

describe('ATVSideBySideUTVPowerSteeringSystemPartsComponent', () => {
  let component: ATVSideBySideUTVPowerSteeringSystemPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVPowerSteeringSystemPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVPowerSteeringSystemPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVPowerSteeringSystemPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
