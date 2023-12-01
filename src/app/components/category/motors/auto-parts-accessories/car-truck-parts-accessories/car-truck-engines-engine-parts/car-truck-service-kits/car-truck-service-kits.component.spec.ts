import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckServiceKitsComponent } from './car-truck-service-kits.component';

describe('CarTruckServiceKitsComponent', () => {
  let component: CarTruckServiceKitsComponent;
  let fixture: ComponentFixture<CarTruckServiceKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckServiceKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckServiceKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
