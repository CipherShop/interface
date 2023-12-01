import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAutoGlassComponent } from './car-truck-auto-glass.component';

describe('CarTruckAutoGlassComponent', () => {
  let component: CarTruckAutoGlassComponent;
  let fixture: ComponentFixture<CarTruckAutoGlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAutoGlassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAutoGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
