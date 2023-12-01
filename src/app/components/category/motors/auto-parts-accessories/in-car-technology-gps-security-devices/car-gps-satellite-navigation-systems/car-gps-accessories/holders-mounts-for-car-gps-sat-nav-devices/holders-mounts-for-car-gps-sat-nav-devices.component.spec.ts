import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldersMountsForCarGPSSatNavDevicesComponent } from './holders-mounts-for-car-gps-sat-nav-devices.component';

describe('HoldersMountsForCarGPSSatNavDevicesComponent', () => {
  let component: HoldersMountsForCarGPSSatNavDevicesComponent;
  let fixture: ComponentFixture<HoldersMountsForCarGPSSatNavDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldersMountsForCarGPSSatNavDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoldersMountsForCarGPSSatNavDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
