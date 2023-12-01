import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatElectricalLightingComponent } from './boat-electrical-lighting.component';

describe('BoatElectricalLightingComponent', () => {
  let component: BoatElectricalLightingComponent;
  let fixture: ComponentFixture<BoatElectricalLightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatElectricalLightingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatElectricalLightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
