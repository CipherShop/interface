import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckValveGuidesSpringsPartsComponent } from './car-truck-valve-guides-springs-parts.component';

describe('CarTruckValveGuidesSpringsPartsComponent', () => {
  let component: CarTruckValveGuidesSpringsPartsComponent;
  let fixture: ComponentFixture<CarTruckValveGuidesSpringsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckValveGuidesSpringsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckValveGuidesSpringsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
