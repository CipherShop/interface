import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckGasketsSealsComponent } from './car-truck-gaskets-seals.component';

describe('CarTruckGasketsSealsComponent', () => {
  let component: CarTruckGasketsSealsComponent;
  let fixture: ComponentFixture<CarTruckGasketsSealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckGasketsSealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckGasketsSealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
