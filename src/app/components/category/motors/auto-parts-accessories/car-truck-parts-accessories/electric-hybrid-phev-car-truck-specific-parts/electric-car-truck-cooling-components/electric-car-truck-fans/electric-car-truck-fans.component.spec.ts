import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckFansComponent } from './electric-car-truck-fans.component';

describe('ElectricCarTruckFansComponent', () => {
  let component: ElectricCarTruckFansComponent;
  let fixture: ComponentFixture<ElectricCarTruckFansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckFansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
