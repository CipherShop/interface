import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAntennasComponent } from './car-truck-antennas.component';

describe('CarTruckAntennasComponent', () => {
  let component: CarTruckAntennasComponent;
  let fixture: ComponentFixture<CarTruckAntennasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAntennasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAntennasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
