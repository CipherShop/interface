import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckLiftSupportsLatchesHingesAdditionalPartsComponent } from './car-truck-lift-supports-latches-hinges-additional-parts.component';

describe('CarTruckLiftSupportsLatchesHingesAdditionalPartsComponent', () => {
  let component: CarTruckLiftSupportsLatchesHingesAdditionalPartsComponent;
  let fixture: ComponentFixture<CarTruckLiftSupportsLatchesHingesAdditionalPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckLiftSupportsLatchesHingesAdditionalPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckLiftSupportsLatchesHingesAdditionalPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
