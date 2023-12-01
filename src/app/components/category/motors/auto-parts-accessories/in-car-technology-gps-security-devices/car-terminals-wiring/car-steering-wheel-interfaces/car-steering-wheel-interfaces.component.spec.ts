import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSteeringWheelInterfacesComponent } from './car-steering-wheel-interfaces.component';

describe('CarSteeringWheelInterfacesComponent', () => {
  let component: CarSteeringWheelInterfacesComponent;
  let fixture: ComponentFixture<CarSteeringWheelInterfacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSteeringWheelInterfacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSteeringWheelInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
