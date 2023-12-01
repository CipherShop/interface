import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckCruiseControlComponentsComponent } from './car-truck-cruise-control-components.component';

describe('CarTruckCruiseControlComponentsComponent', () => {
  let component: CarTruckCruiseControlComponentsComponent;
  let fixture: ComponentFixture<CarTruckCruiseControlComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckCruiseControlComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckCruiseControlComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
