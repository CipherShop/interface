import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBodyMoldingsTrimsComponent } from './car-truck-body-moldings-trims.component';

describe('CarTruckBodyMoldingsTrimsComponent', () => {
  let component: CarTruckBodyMoldingsTrimsComponent;
  let fixture: ComponentFixture<CarTruckBodyMoldingsTrimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBodyMoldingsTrimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBodyMoldingsTrimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
