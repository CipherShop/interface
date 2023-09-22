import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVChargingStationsComponent } from './electric-atv-sx-s-utv-charging-stations.component';

describe('ElectricATVSxSUTVChargingStationsComponent', () => {
  let component: ElectricATVSxSUTVChargingStationsComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVChargingStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVChargingStationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVChargingStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
