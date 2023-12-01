import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineRockerValveCoversComponent } from './car-truck-engine-rocker-valve-covers.component';

describe('CarTruckEngineRockerValveCoversComponent', () => {
  let component: CarTruckEngineRockerValveCoversComponent;
  let fixture: ComponentFixture<CarTruckEngineRockerValveCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineRockerValveCoversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineRockerValveCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
