import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckGrillesComponent } from './car-truck-grilles.component';

describe('CarTruckGrillesComponent', () => {
  let component: CarTruckGrillesComponent;
  let fixture: ComponentFixture<CarTruckGrillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckGrillesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckGrillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
