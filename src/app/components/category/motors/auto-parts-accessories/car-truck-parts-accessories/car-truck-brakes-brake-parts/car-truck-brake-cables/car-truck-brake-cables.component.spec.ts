import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBrakeCablesComponent } from './car-truck-brake-cables.component';

describe('CarTruckBrakeCablesComponent', () => {
  let component: CarTruckBrakeCablesComponent;
  let fixture: ComponentFixture<CarTruckBrakeCablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBrakeCablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBrakeCablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
