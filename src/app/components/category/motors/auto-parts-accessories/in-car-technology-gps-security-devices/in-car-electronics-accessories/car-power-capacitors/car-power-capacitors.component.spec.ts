import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPowerCapacitorsComponent } from './car-power-capacitors.component';

describe('CarPowerCapacitorsComponent', () => {
  let component: CarPowerCapacitorsComponent;
  let fixture: ComponentFixture<CarPowerCapacitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPowerCapacitorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarPowerCapacitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
