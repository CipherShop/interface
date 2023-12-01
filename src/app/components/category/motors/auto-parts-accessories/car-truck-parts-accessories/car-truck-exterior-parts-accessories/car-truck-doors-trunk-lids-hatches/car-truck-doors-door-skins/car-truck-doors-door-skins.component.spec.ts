import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckDoorsDoorSkinsComponent } from './car-truck-doors-door-skins.component';

describe('CarTruckDoorsDoorSkinsComponent', () => {
  let component: CarTruckDoorsDoorSkinsComponent;
  let fixture: ComponentFixture<CarTruckDoorsDoorSkinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckDoorsDoorSkinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckDoorsDoorSkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
