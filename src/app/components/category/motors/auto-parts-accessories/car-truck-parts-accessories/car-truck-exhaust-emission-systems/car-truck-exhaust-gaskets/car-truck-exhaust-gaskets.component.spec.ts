import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckExhaustGasketsComponent } from './car-truck-exhaust-gaskets.component';

describe('CarTruckExhaustGasketsComponent', () => {
  let component: CarTruckExhaustGasketsComponent;
  let fixture: ComponentFixture<CarTruckExhaustGasketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckExhaustGasketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckExhaustGasketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
