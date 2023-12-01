import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineBracketsHardwareComponent } from './car-truck-engine-brackets-hardware.component';

describe('CarTruckEngineBracketsHardwareComponent', () => {
  let component: CarTruckEngineBracketsHardwareComponent;
  let fixture: ComponentFixture<CarTruckEngineBracketsHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineBracketsHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineBracketsHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
