import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckSunVisorsWindBugDeflectorsComponent } from './car-truck-sun-visors-wind-bug-deflectors.component';

describe('CarTruckSunVisorsWindBugDeflectorsComponent', () => {
  let component: CarTruckSunVisorsWindBugDeflectorsComponent;
  let fixture: ComponentFixture<CarTruckSunVisorsWindBugDeflectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckSunVisorsWindBugDeflectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckSunVisorsWindBugDeflectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
