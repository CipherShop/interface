import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckConnectingRodsPartsComponent } from './car-truck-connecting-rods-parts.component';

describe('CarTruckConnectingRodsPartsComponent', () => {
  let component: CarTruckConnectingRodsPartsComponent;
  let fixture: ComponentFixture<CarTruckConnectingRodsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckConnectingRodsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckConnectingRodsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
