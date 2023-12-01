import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckWindowSealsGasketsTrimsComponent } from './car-truck-window-seals-gaskets-trims.component';

describe('CarTruckWindowSealsGasketsTrimsComponent', () => {
  let component: CarTruckWindowSealsGasketsTrimsComponent;
  let fixture: ComponentFixture<CarTruckWindowSealsGasketsTrimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckWindowSealsGasketsTrimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckWindowSealsGasketsTrimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
