import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckTensionersPulleysComponent } from './car-truck-tensioners-pulleys.component';

describe('CarTruckTensionersPulleysComponent', () => {
  let component: CarTruckTensionersPulleysComponent;
  let fixture: ComponentFixture<CarTruckTensionersPulleysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckTensionersPulleysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckTensionersPulleysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
