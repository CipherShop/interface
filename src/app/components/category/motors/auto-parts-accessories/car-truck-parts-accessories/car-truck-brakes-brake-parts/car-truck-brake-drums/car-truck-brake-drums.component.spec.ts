import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBrakeDrumsComponent } from './car-truck-brake-drums.component';

describe('CarTruckBrakeDrumsComponent', () => {
  let component: CarTruckBrakeDrumsComponent;
  let fixture: ComponentFixture<CarTruckBrakeDrumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBrakeDrumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBrakeDrumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
