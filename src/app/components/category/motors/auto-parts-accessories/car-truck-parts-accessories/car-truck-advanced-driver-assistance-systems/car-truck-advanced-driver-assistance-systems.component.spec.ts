import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckAdvancedDriverAssistanceSystemsComponent } from './car-truck-advanced-driver-assistance-systems.component';

describe('CarTruckAdvancedDriverAssistanceSystemsComponent', () => {
  let component: CarTruckAdvancedDriverAssistanceSystemsComponent;
  let fixture: ComponentFixture<CarTruckAdvancedDriverAssistanceSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckAdvancedDriverAssistanceSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckAdvancedDriverAssistanceSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
