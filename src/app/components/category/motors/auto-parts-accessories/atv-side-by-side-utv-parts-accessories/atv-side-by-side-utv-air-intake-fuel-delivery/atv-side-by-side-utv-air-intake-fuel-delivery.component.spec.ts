import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtvSideBySideUtvAirIntakeFuelDeliveryComponent } from './atv-side-by-side-utv-air-intake-fuel-delivery.component';

describe('AtvSideBySideUtvAirIntakeFuelDeliveryComponent', () => {
  let component: AtvSideBySideUtvAirIntakeFuelDeliveryComponent;
  let fixture: ComponentFixture<AtvSideBySideUtvAirIntakeFuelDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtvSideBySideUtvAirIntakeFuelDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtvSideBySideUtvAirIntakeFuelDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
