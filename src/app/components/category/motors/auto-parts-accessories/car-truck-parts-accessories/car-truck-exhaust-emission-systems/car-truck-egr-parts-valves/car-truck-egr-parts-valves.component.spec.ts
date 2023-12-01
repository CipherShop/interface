import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEGRPartsValvesComponent } from './car-truck-egr-parts-valves.component';

describe('CarTruckEGRPartsValvesComponent', () => {
  let component: CarTruckEGRPartsValvesComponent;
  let fixture: ComponentFixture<CarTruckEGRPartsValvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEGRPartsValvesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEGRPartsValvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
