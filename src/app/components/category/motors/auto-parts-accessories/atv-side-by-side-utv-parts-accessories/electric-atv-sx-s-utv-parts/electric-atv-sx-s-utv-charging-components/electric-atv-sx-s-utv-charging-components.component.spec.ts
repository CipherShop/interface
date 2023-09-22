import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricATVSxSUTVChargingComponentsComponent } from './electric-atv-sx-s-utv-charging-components.component';

describe('ElectricATVSxSUTVChargingComponentsComponent', () => {
  let component: ElectricATVSxSUTVChargingComponentsComponent;
  let fixture: ComponentFixture<ElectricATVSxSUTVChargingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricATVSxSUTVChargingComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricATVSxSUTVChargingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
