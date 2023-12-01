import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBumperInsertsCoversComponent } from './car-truck-bumper-inserts-covers.component';

describe('CarTruckBumperInsertsCoversComponent', () => {
  let component: CarTruckBumperInsertsCoversComponent;
  let fixture: ComponentFixture<CarTruckBumperInsertsCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBumperInsertsCoversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBumperInsertsCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
