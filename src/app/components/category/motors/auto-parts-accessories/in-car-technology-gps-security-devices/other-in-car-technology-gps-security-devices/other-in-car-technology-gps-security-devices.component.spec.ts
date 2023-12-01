import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInCarTechnologyGPSSecurityDevicesComponent } from './other-in-car-technology-gps-security-devices.component';

describe('OtherInCarTechnologyGPSSecurityDevicesComponent', () => {
  let component: OtherInCarTechnologyGPSSecurityDevicesComponent;
  let fixture: ComponentFixture<OtherInCarTechnologyGPSSecurityDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherInCarTechnologyGPSSecurityDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherInCarTechnologyGPSSecurityDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
