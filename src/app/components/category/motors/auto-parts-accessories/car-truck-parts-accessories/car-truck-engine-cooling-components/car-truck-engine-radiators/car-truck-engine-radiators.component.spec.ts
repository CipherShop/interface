import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineRadiatorsComponent } from './car-truck-engine-radiators.component';

describe('CarTruckEngineRadiatorsComponent', () => {
  let component: CarTruckEngineRadiatorsComponent;
  let fixture: ComponentFixture<CarTruckEngineRadiatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineRadiatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineRadiatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
