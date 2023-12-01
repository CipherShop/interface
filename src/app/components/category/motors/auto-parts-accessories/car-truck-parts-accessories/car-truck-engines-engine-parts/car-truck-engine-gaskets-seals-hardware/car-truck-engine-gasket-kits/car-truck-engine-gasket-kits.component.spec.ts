import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineGasketKitsComponent } from './car-truck-engine-gasket-kits.component';

describe('CarTruckEngineGasketKitsComponent', () => {
  let component: CarTruckEngineGasketKitsComponent;
  let fixture: ComponentFixture<CarTruckEngineGasketKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineGasketKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineGasketKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
