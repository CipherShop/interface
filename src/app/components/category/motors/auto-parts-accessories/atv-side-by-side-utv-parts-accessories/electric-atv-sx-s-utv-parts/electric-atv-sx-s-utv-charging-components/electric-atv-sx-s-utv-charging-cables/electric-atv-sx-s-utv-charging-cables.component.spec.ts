import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVChargingCablesComponent } from './electric-atv-sx-s-utv-charging-cables.component';

describe('ElectricATVSxSUTVChargingCablesComponent', () => {
  let component: ElectricATVSxSUTVChargingCablesComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVChargingCablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVChargingCablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVChargingCablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
