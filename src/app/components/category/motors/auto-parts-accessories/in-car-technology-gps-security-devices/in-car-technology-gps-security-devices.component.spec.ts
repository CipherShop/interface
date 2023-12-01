import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCarTechnologyGPSSecurityDevicesComponent } from './in-car-technology-gps-security-devices.component';

describe('InCarTechnologyGPSSecurityDevicesComponent', () => {
  let component: InCarTechnologyGPSSecurityDevicesComponent;
  let fixture: ComponentFixture<InCarTechnologyGPSSecurityDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCarTechnologyGPSSecurityDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCarTechnologyGPSSecurityDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
