import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckWiringHarnessesCablesConnectorsComponent } from './electric-car-truck-wiring-harnesses-cables-connectors.component';

describe('ElectricCarTruckWiringHarnessesCablesConnectorsComponent', () => {
  let component: ElectricCarTruckWiringHarnessesCablesConnectorsComponent;
  let fixture: ComponentFixture<ElectricCarTruckWiringHarnessesCablesConnectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckWiringHarnessesCablesConnectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckWiringHarnessesCablesConnectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
