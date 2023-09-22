import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAirIntakeFuelSensorsComponent } from './atv-side-by-side-utv-air-intake-fuel-sensors.component';

describe('ATVSideBySideUTVAirIntakeFuelSensorsComponent', () => {
  let component: ATVSideBySideUTVAirIntakeFuelSensorsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAirIntakeFuelSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAirIntakeFuelSensorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAirIntakeFuelSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
