import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckHatchesTrunkLidsComponent } from './car-truck-hatches-trunk-lids.component';

describe('CarTruckHatchesTrunkLidsComponent', () => {
  let component: CarTruckHatchesTrunkLidsComponent;
  let fixture: ComponentFixture<CarTruckHatchesTrunkLidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckHatchesTrunkLidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckHatchesTrunkLidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
