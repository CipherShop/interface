import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckSprocketsComponent } from './car-truck-sprockets.component';

describe('CarTruckSprocketsComponent', () => {
  let component: CarTruckSprocketsComponent;
  let fixture: ComponentFixture<CarTruckSprocketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckSprocketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckSprocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
