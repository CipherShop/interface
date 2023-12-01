import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckDoorsTrunkLidsHatchesComponent } from './car-truck-doors-trunk-lids-hatches.component';

describe('CarTruckDoorsTrunkLidsHatchesComponent', () => {
  let component: CarTruckDoorsTrunkLidsHatchesComponent;
  let fixture: ComponentFixture<CarTruckDoorsTrunkLidsHatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckDoorsTrunkLidsHatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckDoorsTrunkLidsHatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
