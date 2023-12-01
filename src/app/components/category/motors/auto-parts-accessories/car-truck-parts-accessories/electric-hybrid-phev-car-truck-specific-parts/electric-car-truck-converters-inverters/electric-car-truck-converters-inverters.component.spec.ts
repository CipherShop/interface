import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckConvertersInvertersComponent } from './electric-car-truck-converters-inverters.component';

describe('ElectricCarTruckConvertersInvertersComponent', () => {
  let component: ElectricCarTruckConvertersInvertersComponent;
  let fixture: ComponentFixture<ElectricCarTruckConvertersInvertersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckConvertersInvertersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckConvertersInvertersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
