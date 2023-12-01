import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAdditionalGlassWindowPartsComponent } from './car-truck-additional-glass-window-parts.component';

describe('CarTruckAdditionalGlassWindowPartsComponent', () => {
  let component: CarTruckAdditionalGlassWindowPartsComponent;
  let fixture: ComponentFixture<CarTruckAdditionalGlassWindowPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAdditionalGlassWindowPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAdditionalGlassWindowPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
