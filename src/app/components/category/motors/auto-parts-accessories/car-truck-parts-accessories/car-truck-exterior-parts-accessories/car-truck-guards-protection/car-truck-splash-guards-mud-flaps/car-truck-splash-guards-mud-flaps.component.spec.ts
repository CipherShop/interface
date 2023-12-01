import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckSplashGuardsMudFlapsComponent } from './car-truck-splash-guards-mud-flaps.component';

describe('CarTruckSplashGuardsMudFlapsComponent', () => {
  let component: CarTruckSplashGuardsMudFlapsComponent;
  let fixture: ComponentFixture<CarTruckSplashGuardsMudFlapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckSplashGuardsMudFlapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckSplashGuardsMudFlapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
