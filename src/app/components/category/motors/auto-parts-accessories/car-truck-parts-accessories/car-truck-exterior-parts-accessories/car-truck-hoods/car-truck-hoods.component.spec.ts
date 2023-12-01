import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckHoodsComponent } from './car-truck-hoods.component';

describe('CarTruckHoodsComponent', () => {
  let component: CarTruckHoodsComponent;
  let fixture: ComponentFixture<CarTruckHoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckHoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckHoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
