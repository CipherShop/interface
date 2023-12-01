import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckExhaustSystemKitsComponent } from './car-truck-exhaust-system-kits.component';

describe('CarTruckExhaustSystemKitsComponent', () => {
  let component: CarTruckExhaustSystemKitsComponent;
  let fixture: ComponentFixture<CarTruckExhaustSystemKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckExhaustSystemKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckExhaustSystemKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
