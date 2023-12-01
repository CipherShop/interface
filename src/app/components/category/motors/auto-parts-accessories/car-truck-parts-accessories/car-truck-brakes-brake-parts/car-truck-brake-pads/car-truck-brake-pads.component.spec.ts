import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBrakePadsComponent } from './car-truck-brake-pads.component';

describe('CarTruckBrakePadsComponent', () => {
  let component: CarTruckBrakePadsComponent;
  let fixture: ComponentFixture<CarTruckBrakePadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBrakePadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBrakePadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
