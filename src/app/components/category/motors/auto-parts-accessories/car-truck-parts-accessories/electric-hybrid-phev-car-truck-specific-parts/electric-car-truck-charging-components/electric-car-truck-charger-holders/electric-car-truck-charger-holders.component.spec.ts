import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckChargerHoldersComponent } from './electric-car-truck-charger-holders.component';

describe('ElectricCarTruckChargerHoldersComponent', () => {
  let component: ElectricCarTruckChargerHoldersComponent;
  let fixture: ComponentFixture<ElectricCarTruckChargerHoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckChargerHoldersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckChargerHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
