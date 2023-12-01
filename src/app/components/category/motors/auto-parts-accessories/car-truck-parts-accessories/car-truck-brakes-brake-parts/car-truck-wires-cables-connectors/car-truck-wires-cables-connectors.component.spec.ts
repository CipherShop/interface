import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckWiresCablesConnectorsComponent } from './car-truck-wires-cables-connectors.component';

describe('CarTruckWiresCablesConnectorsComponent', () => {
  let component: CarTruckWiresCablesConnectorsComponent;
  let fixture: ComponentFixture<CarTruckWiresCablesConnectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckWiresCablesConnectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckWiresCablesConnectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
