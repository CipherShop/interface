import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckHeatsinksComponent } from './electric-car-truck-heatsinks.component';

describe('ElectricCarTruckHeatsinksComponent', () => {
  let component: ElectricCarTruckHeatsinksComponent;
  let fixture: ComponentFixture<ElectricCarTruckHeatsinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckHeatsinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckHeatsinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
