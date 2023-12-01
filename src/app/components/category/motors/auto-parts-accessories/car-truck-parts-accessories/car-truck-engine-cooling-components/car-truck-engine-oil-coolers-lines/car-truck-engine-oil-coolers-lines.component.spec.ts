import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineOilCoolersLinesComponent } from './car-truck-engine-oil-coolers-lines.component';

describe('CarTruckEngineOilCoolersLinesComponent', () => {
  let component: CarTruckEngineOilCoolersLinesComponent;
  let fixture: ComponentFixture<CarTruckEngineOilCoolersLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineOilCoolersLinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineOilCoolersLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
