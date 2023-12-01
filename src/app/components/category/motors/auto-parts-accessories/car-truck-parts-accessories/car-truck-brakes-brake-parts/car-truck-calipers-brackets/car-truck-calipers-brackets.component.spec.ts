import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckCalipersBracketsComponent } from './car-truck-calipers-brackets.component';

describe('CarTruckCalipersBracketsComponent', () => {
  let component: CarTruckCalipersBracketsComponent;
  let fixture: ComponentFixture<CarTruckCalipersBracketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckCalipersBracketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckCalipersBracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
