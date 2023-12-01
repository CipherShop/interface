import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBrakeComponentKitsComponent } from './car-truck-brake-component-kits.component';

describe('CarTruckBrakeComponentKitsComponent', () => {
  let component: CarTruckBrakeComponentKitsComponent;
  let fixture: ComponentFixture<CarTruckBrakeComponentKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBrakeComponentKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBrakeComponentKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
