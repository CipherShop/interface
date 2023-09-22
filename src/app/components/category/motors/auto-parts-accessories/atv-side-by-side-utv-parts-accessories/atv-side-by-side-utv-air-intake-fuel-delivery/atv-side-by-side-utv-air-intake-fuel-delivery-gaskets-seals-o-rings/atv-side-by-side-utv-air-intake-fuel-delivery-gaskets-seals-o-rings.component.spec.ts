import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAirIntakeFuelDeliveryGasketsSealsORingsComponent } from './atv-side-by-side-utv-air-intake-fuel-delivery-gaskets-seals-o-rings.component';

describe('ATVSideBySideUTVAirIntakeFuelDeliveryGasketsSealsORingsComponent', () => {
  let component: ATVSideBySideUTVAirIntakeFuelDeliveryGasketsSealsORingsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAirIntakeFuelDeliveryGasketsSealsORingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAirIntakeFuelDeliveryGasketsSealsORingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAirIntakeFuelDeliveryGasketsSealsORingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
