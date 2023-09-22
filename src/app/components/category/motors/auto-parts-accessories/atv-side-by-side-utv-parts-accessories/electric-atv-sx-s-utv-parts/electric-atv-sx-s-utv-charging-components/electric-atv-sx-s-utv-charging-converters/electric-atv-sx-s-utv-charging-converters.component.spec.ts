import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVChargingConvertersComponent } from './electric-atv-sx-s-utv-charging-converters.component';

describe('ElectricATVSxSUTVChargingConvertersComponent', () => {
  let component: ElectricATVSxSUTVChargingConvertersComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVChargingConvertersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVChargingConvertersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVChargingConvertersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
