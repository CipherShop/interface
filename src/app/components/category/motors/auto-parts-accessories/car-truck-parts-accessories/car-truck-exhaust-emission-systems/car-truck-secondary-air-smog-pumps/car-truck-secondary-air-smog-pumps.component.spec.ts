import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckSecondaryAirSmogPumpsComponent } from './car-truck-secondary-air-smog-pumps.component';

describe('CarTruckSecondaryAirSmogPumpsComponent', () => {
  let component: CarTruckSecondaryAirSmogPumpsComponent;
  let fixture: ComponentFixture<CarTruckSecondaryAirSmogPumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckSecondaryAirSmogPumpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckSecondaryAirSmogPumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
