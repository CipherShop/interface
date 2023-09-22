import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherElectricATVSxSUTVChargingComponentsComponent } from './other-electric-atv-sx-s-utv-charging-components.component';

describe('OtherElectricATVSxSUTVChargingComponentsComponent', () => {
  let component: OtherElectricATVSxSUTVChargingComponentsComponent;
  let fixture: ComponentFixture<OtherElectricATVSxSUTVChargingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherElectricATVSxSUTVChargingComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherElectricATVSxSUTVChargingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
