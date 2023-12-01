import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineCoolingComponentsComponent } from './car-truck-engine-cooling-components.component';

describe('CarTruckEngineCoolingComponentsComponent', () => {
  let component: CarTruckEngineCoolingComponentsComponent;
  let fixture: ComponentFixture<CarTruckEngineCoolingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineCoolingComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineCoolingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
