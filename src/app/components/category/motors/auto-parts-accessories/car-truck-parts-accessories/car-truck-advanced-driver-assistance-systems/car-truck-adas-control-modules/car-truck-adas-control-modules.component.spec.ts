import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckADASControlModulesComponent } from './car-truck-adas-control-modules.component';

describe('CarTruckADASControlModulesComponent', () => {
  let component: CarTruckADASControlModulesComponent;
  let fixture: ComponentFixture<CarTruckADASControlModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckADASControlModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckADASControlModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
