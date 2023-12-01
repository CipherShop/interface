import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineTimingKitsComponent } from './car-truck-engine-timing-kits.component';

describe('CarTruckEngineTimingKitsComponent', () => {
  let component: CarTruckEngineTimingKitsComponent;
  let fixture: ComponentFixture<CarTruckEngineTimingKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineTimingKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineTimingKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
