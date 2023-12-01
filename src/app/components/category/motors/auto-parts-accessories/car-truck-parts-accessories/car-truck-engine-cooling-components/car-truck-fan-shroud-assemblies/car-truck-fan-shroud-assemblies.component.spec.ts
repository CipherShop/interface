import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckFanShroudAssembliesComponent } from './car-truck-fan-shroud-assemblies.component';

describe('CarTruckFanShroudAssembliesComponent', () => {
  let component: CarTruckFanShroudAssembliesComponent;
  let fixture: ComponentFixture<CarTruckFanShroudAssembliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckFanShroudAssembliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckFanShroudAssembliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
