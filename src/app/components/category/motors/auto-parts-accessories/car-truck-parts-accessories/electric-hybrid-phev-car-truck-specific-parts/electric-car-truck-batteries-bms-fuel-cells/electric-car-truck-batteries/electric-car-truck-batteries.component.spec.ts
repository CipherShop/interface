import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckBatteriesComponent } from './electric-car-truck-batteries.component';

describe('ElectricCarTruckBatteriesComponent', () => {
  let component: ElectricCarTruckBatteriesComponent;
  let fixture: ComponentFixture<ElectricCarTruckBatteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckBatteriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckBatteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
