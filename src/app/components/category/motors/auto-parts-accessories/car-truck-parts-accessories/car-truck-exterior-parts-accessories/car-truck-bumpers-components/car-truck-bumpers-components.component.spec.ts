import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBumpersComponentsComponent } from './car-truck-bumpers-components.component';

describe('CarTruckBumpersComponentsComponent', () => {
  let component: CarTruckBumpersComponentsComponent;
  let fixture: ComponentFixture<CarTruckBumpersComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBumpersComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBumpersComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
