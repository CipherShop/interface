import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckValvetrainComponentsComponent } from './car-truck-valvetrain-components.component';

describe('CarTruckValvetrainComponentsComponent', () => {
  let component: CarTruckValvetrainComponentsComponent;
  let fixture: ComponentFixture<CarTruckValvetrainComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckValvetrainComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckValvetrainComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
