import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckABSControlModulesComponent } from './car-truck-abs-control-modules.component';

describe('CarTruckABSControlModulesComponent', () => {
  let component: CarTruckABSControlModulesComponent;
  let fixture: ComponentFixture<CarTruckABSControlModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckABSControlModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckABSControlModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
