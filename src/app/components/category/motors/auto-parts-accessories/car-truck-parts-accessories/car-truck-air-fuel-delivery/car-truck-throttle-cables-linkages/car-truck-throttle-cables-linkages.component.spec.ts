import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckThrottleCablesLinkagesComponent } from './car-truck-throttle-cables-linkages.component';

describe('CarTruckThrottleCablesLinkagesComponent', () => {
  let component: CarTruckThrottleCablesLinkagesComponent;
  let fixture: ComponentFixture<CarTruckThrottleCablesLinkagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckThrottleCablesLinkagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckThrottleCablesLinkagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
