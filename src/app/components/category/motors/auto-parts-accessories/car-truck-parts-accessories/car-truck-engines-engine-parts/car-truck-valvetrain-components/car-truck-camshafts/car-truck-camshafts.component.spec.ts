import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckCamshaftsComponent } from './car-truck-camshafts.component';

describe('CarTruckCamshaftsComponent', () => {
  let component: CarTruckCamshaftsComponent;
  let fixture: ComponentFixture<CarTruckCamshaftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckCamshaftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckCamshaftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
