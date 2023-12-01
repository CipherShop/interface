import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBrakeDiscRotorsComponent } from './car-truck-brake-disc-rotors.component';

describe('CarTruckBrakeDiscRotorsComponent', () => {
  let component: CarTruckBrakeDiscRotorsComponent;
  let fixture: ComponentFixture<CarTruckBrakeDiscRotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBrakeDiscRotorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBrakeDiscRotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
