import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckWindowTintingComponent } from './car-truck-window-tinting.component';

describe('CarTruckWindowTintingComponent', () => {
  let component: CarTruckWindowTintingComponent;
  let fixture: ComponentFixture<CarTruckWindowTintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckWindowTintingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckWindowTintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
