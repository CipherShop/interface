import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckExhaustManifoldsHeadersComponent } from './car-truck-exhaust-manifolds-headers.component';

describe('CarTruckExhaustManifoldsHeadersComponent', () => {
  let component: CarTruckExhaustManifoldsHeadersComponent;
  let fixture: ComponentFixture<CarTruckExhaustManifoldsHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckExhaustManifoldsHeadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckExhaustManifoldsHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
