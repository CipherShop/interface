import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckACReceiverDryersAccumulatorsComponent } from './car-truck-a-c-receiver-dryers-accumulators.component';

describe('CarTruckACReceiverDryersAccumulatorsComponent', () => {
  let component: CarTruckACReceiverDryersAccumulatorsComponent;
  let fixture: ComponentFixture<CarTruckACReceiverDryersAccumulatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckACReceiverDryersAccumulatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckACReceiverDryersAccumulatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
