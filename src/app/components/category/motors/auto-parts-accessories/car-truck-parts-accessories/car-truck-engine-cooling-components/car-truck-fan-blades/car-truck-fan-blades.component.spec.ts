import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckFanBladesComponent } from './car-truck-fan-blades.component';

describe('CarTruckFanBladesComponent', () => {
  let component: CarTruckFanBladesComponent;
  let fixture: ComponentFixture<CarTruckFanBladesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckFanBladesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckFanBladesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
