import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenProtectorsForCarGPSSatNavDevicesComponent } from './screen-protectors-for-car-gps-sat-nav-devices.component';

describe('ScreenProtectorsForCarGPSSatNavDevicesComponent', () => {
  let component: ScreenProtectorsForCarGPSSatNavDevicesComponent;
  let fixture: ComponentFixture<ScreenProtectorsForCarGPSSatNavDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenProtectorsForCarGPSSatNavDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenProtectorsForCarGPSSatNavDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
