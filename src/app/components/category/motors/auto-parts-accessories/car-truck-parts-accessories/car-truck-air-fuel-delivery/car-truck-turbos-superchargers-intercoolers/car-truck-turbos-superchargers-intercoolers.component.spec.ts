import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckTurbosSuperchargersIntercoolersComponent } from './car-truck-turbos-superchargers-intercoolers.component';

describe('CarTruckTurbosSuperchargersIntercoolersComponent', () => {
  let component: CarTruckTurbosSuperchargersIntercoolersComponent;
  let fixture: ComponentFixture<CarTruckTurbosSuperchargersIntercoolersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckTurbosSuperchargersIntercoolersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckTurbosSuperchargersIntercoolersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
