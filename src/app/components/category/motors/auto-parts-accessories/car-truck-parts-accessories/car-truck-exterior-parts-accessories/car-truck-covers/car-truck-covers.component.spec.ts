import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckCoversComponent } from './car-truck-covers.component';

describe('CarTruckCoversComponent', () => {
  let component: CarTruckCoversComponent;
  let fixture: ComponentFixture<CarTruckCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckCoversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
