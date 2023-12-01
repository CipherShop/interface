import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckTimingComponentsKitsComponent } from './car-truck-timing-components-kits.component';

describe('CarTruckTimingComponentsKitsComponent', () => {
  let component: CarTruckTimingComponentsKitsComponent;
  let fixture: ComponentFixture<CarTruckTimingComponentsKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckTimingComponentsKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckTimingComponentsKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
