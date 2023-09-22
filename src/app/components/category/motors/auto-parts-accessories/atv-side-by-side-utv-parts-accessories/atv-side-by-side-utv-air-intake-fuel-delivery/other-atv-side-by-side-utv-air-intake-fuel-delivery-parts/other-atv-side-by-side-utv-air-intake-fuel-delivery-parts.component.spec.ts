import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVAirIntakeFuelDeliveryPartsComponent } from './other-atv-side-by-side-utv-air-intake-fuel-delivery-parts.component';

describe('OtherATVSideBySideUTVAirIntakeFuelDeliveryPartsComponent', () => {
  let component: OtherATVSideBySideUTVAirIntakeFuelDeliveryPartsComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVAirIntakeFuelDeliveryPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVAirIntakeFuelDeliveryPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVAirIntakeFuelDeliveryPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
