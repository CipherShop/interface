import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckExhaustEmissionSystemsComponent } from './car-truck-exhaust-emission-systems.component';

describe('CarTruckExhaustEmissionSystemsComponent', () => {
  let component: CarTruckExhaustEmissionSystemsComponent;
  let fixture: ComponentFixture<CarTruckExhaustEmissionSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckExhaustEmissionSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckExhaustEmissionSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
