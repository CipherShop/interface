import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckACEvaporatorsComponent } from './car-truck-a-c-evaporators.component';

describe('CarTruckACEvaporatorsComponent', () => {
  let component: CarTruckACEvaporatorsComponent;
  let fixture: ComponentFixture<CarTruckACEvaporatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckACEvaporatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckACEvaporatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
