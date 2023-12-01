import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckACCondensersComponent } from './car-truck-a-c-condensers.component';

describe('CarTruckACCondensersComponent', () => {
  let component: CarTruckACCondensersComponent;
  let fixture: ComponentFixture<CarTruckACCondensersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckACCondensersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckACCondensersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
