import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVHighVoltageCircuitFusesBreakersComponent } from './electric-atv-sx-s-utv-high-voltage-circuit-fuses-breakers.component';

describe('ElectricATVSxSUTVHighVoltageCircuitFusesBreakersComponent', () => {
  let component: ElectricATVSxSUTVHighVoltageCircuitFusesBreakersComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVHighVoltageCircuitFusesBreakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVHighVoltageCircuitFusesBreakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVHighVoltageCircuitFusesBreakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
