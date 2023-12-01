import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckMasterCylindersComponent } from './car-truck-master-cylinders.component';

describe('CarTruckMasterCylindersComponent', () => {
  let component: CarTruckMasterCylindersComponent;
  let fixture: ComponentFixture<CarTruckMasterCylindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckMasterCylindersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckMasterCylindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
