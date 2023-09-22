import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVBatteryManagementSystemsBMSComponent } from './electric-atv-sx-s-utv-battery-management-systems-bms.component';

describe('ElectricATVSxSUTVBatteryManagementSystemsBMSComponent', () => {
  let component: ElectricATVSxSUTVBatteryManagementSystemsBMSComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVBatteryManagementSystemsBMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVBatteryManagementSystemsBMSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVBatteryManagementSystemsBMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
