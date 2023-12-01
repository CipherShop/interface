import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckTailgatesLiftgatesComponent } from './car-truck-tailgates-liftgates.component';

describe('CarTruckTailgatesLiftgatesComponent', () => {
  let component: CarTruckTailgatesLiftgatesComponent;
  let fixture: ComponentFixture<CarTruckTailgatesLiftgatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckTailgatesLiftgatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckTailgatesLiftgatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
