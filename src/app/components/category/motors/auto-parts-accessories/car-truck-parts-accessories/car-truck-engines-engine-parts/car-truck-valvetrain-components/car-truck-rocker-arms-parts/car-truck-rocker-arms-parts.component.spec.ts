import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckRockerArmsPartsComponent } from './car-truck-rocker-arms-parts.component';

describe('CarTruckRockerArmsPartsComponent', () => {
  let component: CarTruckRockerArmsPartsComponent;
  let fixture: ComponentFixture<CarTruckRockerArmsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckRockerArmsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckRockerArmsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
