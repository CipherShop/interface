import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPSAntennasForCarGPSSatNavDevicesComponent } from './gps-antennas-for-car-gps-sat-nav-devices.component';

describe('GPSAntennasForCarGPSSatNavDevicesComponent', () => {
  let component: GPSAntennasForCarGPSSatNavDevicesComponent;
  let fixture: ComponentFixture<GPSAntennasForCarGPSSatNavDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GPSAntennasForCarGPSSatNavDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GPSAntennasForCarGPSSatNavDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
