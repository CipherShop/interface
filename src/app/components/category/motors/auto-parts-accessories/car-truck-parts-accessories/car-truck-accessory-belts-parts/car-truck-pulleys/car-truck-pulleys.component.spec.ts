import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckPulleysComponent } from './car-truck-pulleys.component';

describe('CarTruckPulleysComponent', () => {
  let component: CarTruckPulleysComponent;
  let fixture: ComponentFixture<CarTruckPulleysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckPulleysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckPulleysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
