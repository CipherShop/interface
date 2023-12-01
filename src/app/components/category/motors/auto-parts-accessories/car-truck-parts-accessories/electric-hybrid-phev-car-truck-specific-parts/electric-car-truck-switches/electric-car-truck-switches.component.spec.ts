import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckSwitchesComponent } from './electric-car-truck-switches.component';

describe('ElectricCarTruckSwitchesComponent', () => {
  let component: ElectricCarTruckSwitchesComponent;
  let fixture: ComponentFixture<ElectricCarTruckSwitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckSwitchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
