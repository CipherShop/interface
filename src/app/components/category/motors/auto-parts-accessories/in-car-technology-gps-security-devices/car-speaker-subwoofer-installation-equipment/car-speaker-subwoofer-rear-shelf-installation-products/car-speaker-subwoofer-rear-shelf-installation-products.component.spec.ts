import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSpeakerSubwooferRearShelfInstallationProductsComponent } from './car-speaker-subwoofer-rear-shelf-installation-products.component';

describe('CarSpeakerSubwooferRearShelfInstallationProductsComponent', () => {
  let component: CarSpeakerSubwooferRearShelfInstallationProductsComponent;
  let fixture: ComponentFixture<CarSpeakerSubwooferRearShelfInstallationProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSpeakerSubwooferRearShelfInstallationProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSpeakerSubwooferRearShelfInstallationProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
