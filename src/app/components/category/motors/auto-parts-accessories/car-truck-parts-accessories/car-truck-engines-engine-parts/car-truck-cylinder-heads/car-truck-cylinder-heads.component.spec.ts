import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckCylinderHeadsComponent } from './car-truck-cylinder-heads.component';

describe('CarTruckCylinderHeadsComponent', () => {
  let component: CarTruckCylinderHeadsComponent;
  let fixture: ComponentFixture<CarTruckCylinderHeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckCylinderHeadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckCylinderHeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
