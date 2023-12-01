import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEmblemsOrnamentsComponent } from './car-truck-emblems-ornaments.component';

describe('CarTruckEmblemsOrnamentsComponent', () => {
  let component: CarTruckEmblemsOrnamentsComponent;
  let fixture: ComponentFixture<CarTruckEmblemsOrnamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEmblemsOrnamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEmblemsOrnamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
