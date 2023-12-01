import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareMapsForCarGPSSatNavDevicesComponent } from './software-maps-for-car-gps-sat-nav-devices.component';

describe('SoftwareMapsForCarGPSSatNavDevicesComponent', () => {
  let component: SoftwareMapsForCarGPSSatNavDevicesComponent;
  let fixture: ComponentFixture<SoftwareMapsForCarGPSSatNavDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareMapsForCarGPSSatNavDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareMapsForCarGPSSatNavDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
