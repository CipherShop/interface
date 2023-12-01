import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckHeaterCoresComponent } from './car-truck-heater-cores.component';

describe('CarTruckHeaterCoresComponent', () => {
  let component: CarTruckHeaterCoresComponent;
  let fixture: ComponentFixture<CarTruckHeaterCoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckHeaterCoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckHeaterCoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
