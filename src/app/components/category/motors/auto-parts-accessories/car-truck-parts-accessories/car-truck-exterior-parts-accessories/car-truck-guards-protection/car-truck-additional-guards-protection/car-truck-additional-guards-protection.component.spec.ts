import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAdditionalGuardsProtectionComponent } from './car-truck-additional-guards-protection.component';

describe('CarTruckAdditionalGuardsProtectionComponent', () => {
  let component: CarTruckAdditionalGuardsProtectionComponent;
  let fixture: ComponentFixture<CarTruckAdditionalGuardsProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAdditionalGuardsProtectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAdditionalGuardsProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
