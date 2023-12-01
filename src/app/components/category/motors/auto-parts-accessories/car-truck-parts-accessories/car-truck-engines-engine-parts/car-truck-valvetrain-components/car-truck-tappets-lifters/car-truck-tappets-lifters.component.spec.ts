import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckTappetsLiftersComponent } from './car-truck-tappets-lifters.component';

describe('CarTruckTappetsLiftersComponent', () => {
  let component: CarTruckTappetsLiftersComponent;
  let fixture: ComponentFixture<CarTruckTappetsLiftersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckTappetsLiftersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckTappetsLiftersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
