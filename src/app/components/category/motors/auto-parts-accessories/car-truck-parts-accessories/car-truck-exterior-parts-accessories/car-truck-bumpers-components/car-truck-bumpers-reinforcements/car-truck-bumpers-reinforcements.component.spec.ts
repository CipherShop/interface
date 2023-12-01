import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBumpersReinforcementsComponent } from './car-truck-bumpers-reinforcements.component';

describe('CarTruckBumpersReinforcementsComponent', () => {
  let component: CarTruckBumpersReinforcementsComponent;
  let fixture: ComponentFixture<CarTruckBumpersReinforcementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBumpersReinforcementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBumpersReinforcementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
