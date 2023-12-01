import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckHeatShieldsWrapsSleevesComponent } from './car-truck-heat-shields-wraps-sleeves.component';

describe('CarTruckHeatShieldsWrapsSleevesComponent', () => {
  let component: CarTruckHeatShieldsWrapsSleevesComponent;
  let fixture: ComponentFixture<CarTruckHeatShieldsWrapsSleevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckHeatShieldsWrapsSleevesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckHeatShieldsWrapsSleevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
