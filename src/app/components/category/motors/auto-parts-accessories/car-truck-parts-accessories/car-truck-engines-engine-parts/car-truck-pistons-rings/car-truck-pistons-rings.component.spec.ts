import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckPistonsRingsComponent } from './car-truck-pistons-rings.component';

describe('CarTruckPistonsRingsComponent', () => {
  let component: CarTruckPistonsRingsComponent;
  let fixture: ComponentFixture<CarTruckPistonsRingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckPistonsRingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckPistonsRingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
