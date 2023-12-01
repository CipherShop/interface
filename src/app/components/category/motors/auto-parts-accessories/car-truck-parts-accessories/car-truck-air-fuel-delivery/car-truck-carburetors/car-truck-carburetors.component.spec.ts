import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckCarburetorsComponent } from './car-truck-carburetors.component';

describe('CarTruckCarburetorsComponent', () => {
  let component: CarTruckCarburetorsComponent;
  let fixture: ComponentFixture<CarTruckCarburetorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckCarburetorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckCarburetorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
