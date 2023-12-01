import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineBearingsComponent } from './car-truck-engine-bearings.component';

describe('CarTruckEngineBearingsComponent', () => {
  let component: CarTruckEngineBearingsComponent;
  let fixture: ComponentFixture<CarTruckEngineBearingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineBearingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
