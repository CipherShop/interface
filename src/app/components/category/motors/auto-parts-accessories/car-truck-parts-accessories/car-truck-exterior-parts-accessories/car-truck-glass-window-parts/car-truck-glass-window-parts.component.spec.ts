import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckGlassWindowPartsComponent } from './car-truck-glass-window-parts.component';

describe('CarTruckGlassWindowPartsComponent', () => {
  let component: CarTruckGlassWindowPartsComponent;
  let fixture: ComponentFixture<CarTruckGlassWindowPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckGlassWindowPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckGlassWindowPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
