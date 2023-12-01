import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBrakeShoesComponent } from './car-truck-brake-shoes.component';

describe('CarTruckBrakeShoesComponent', () => {
  let component: CarTruckBrakeShoesComponent;
  let fixture: ComponentFixture<CarTruckBrakeShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBrakeShoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBrakeShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
