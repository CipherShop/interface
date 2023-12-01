import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckCoolingPlatesComponent } from './electric-car-truck-cooling-plates.component';

describe('ElectricCarTruckCoolingPlatesComponent', () => {
  let component: ElectricCarTruckCoolingPlatesComponent;
  let fixture: ComponentFixture<ElectricCarTruckCoolingPlatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckCoolingPlatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckCoolingPlatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
