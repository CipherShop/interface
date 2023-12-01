import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesSkinsForCarGPSSatNavDevicesComponent } from './cases-skins-for-car-gps-sat-nav-devices.component';

describe('CasesSkinsForCarGPSSatNavDevicesComponent', () => {
  let component: CasesSkinsForCarGPSSatNavDevicesComponent;
  let fixture: ComponentFixture<CasesSkinsForCarGPSSatNavDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesSkinsForCarGPSSatNavDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesSkinsForCarGPSSatNavDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
