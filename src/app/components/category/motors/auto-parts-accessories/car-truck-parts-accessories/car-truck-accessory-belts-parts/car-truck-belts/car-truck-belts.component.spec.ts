import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBeltsComponent } from './car-truck-belts.component';

describe('CarTruckBeltsComponent', () => {
  let component: CarTruckBeltsComponent;
  let fixture: ComponentFixture<CarTruckBeltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBeltsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBeltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
