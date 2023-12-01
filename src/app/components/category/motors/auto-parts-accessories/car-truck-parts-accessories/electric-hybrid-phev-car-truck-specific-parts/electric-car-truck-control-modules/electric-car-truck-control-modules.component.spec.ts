import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarTruckControlModulesComponent } from './electric-car-truck-control-modules.component';

describe('ElectricCarTruckControlModulesComponent', () => {
  let component: ElectricCarTruckControlModulesComponent;
  let fixture: ComponentFixture<ElectricCarTruckControlModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarTruckControlModulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarTruckControlModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
