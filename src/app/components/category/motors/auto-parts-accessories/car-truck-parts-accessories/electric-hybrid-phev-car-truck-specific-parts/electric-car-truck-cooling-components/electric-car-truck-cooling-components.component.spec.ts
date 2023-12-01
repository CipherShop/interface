import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckCoolingComponentsComponent } from './electric-car-truck-cooling-components.component';

describe('ElectricCarTruckCoolingComponentsComponent', () => {
  let component: ElectricCarTruckCoolingComponentsComponent;
  let fixture: ComponentFixture<ElectricCarTruckCoolingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckCoolingComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckCoolingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
