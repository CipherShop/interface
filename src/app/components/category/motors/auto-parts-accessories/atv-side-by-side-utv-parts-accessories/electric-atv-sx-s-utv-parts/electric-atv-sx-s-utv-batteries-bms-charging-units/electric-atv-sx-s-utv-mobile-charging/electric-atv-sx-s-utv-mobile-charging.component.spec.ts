import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVMobileChargingComponent } from './electric-atv-sx-s-utv-mobile-charging.component';

describe('ElectricATVSxSUTVMobileChargingComponent', () => {
  let component: ElectricATVSxSUTVMobileChargingComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVMobileChargingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVMobileChargingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVMobileChargingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
