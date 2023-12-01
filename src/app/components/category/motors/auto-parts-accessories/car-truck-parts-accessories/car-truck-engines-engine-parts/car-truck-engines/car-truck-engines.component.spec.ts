import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEnginesComponent } from './car-truck-engines.component';

describe('CarTruckEnginesComponent', () => {
  let component: CarTruckEnginesComponent;
  let fixture: ComponentFixture<CarTruckEnginesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEnginesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
