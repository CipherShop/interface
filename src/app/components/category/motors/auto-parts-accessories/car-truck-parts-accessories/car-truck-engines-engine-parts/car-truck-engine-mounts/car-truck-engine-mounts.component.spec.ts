import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineMountsComponent } from './car-truck-engine-mounts.component';

describe('CarTruckEngineMountsComponent', () => {
  let component: CarTruckEngineMountsComponent;
  let fixture: ComponentFixture<CarTruckEngineMountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineMountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineMountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
