import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEnginesEnginePartsComponent } from './car-truck-engines-engine-parts.component';

describe('CarTruckEnginesEnginePartsComponent', () => {
  let component: CarTruckEnginesEnginePartsComponent;
  let fixture: ComponentFixture<CarTruckEnginesEnginePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEnginesEnginePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEnginesEnginePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
