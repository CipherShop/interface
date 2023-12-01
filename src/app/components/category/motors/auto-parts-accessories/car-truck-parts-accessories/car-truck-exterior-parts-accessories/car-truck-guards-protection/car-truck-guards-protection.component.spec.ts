import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckGuardsProtectionComponent } from './car-truck-guards-protection.component';

describe('CarTruckGuardsProtectionComponent', () => {
  let component: CarTruckGuardsProtectionComponent;
  let fixture: ComponentFixture<CarTruckGuardsProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckGuardsProtectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckGuardsProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
