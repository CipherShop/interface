import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricHybridPHEVCarTruckSpecificPartsComponent } from './electric-hybrid-phev-car-truck-specific-parts.component';

describe('ElectricHybridPHEVCarTruckSpecificPartsComponent', () => {
  let component: ElectricHybridPHEVCarTruckSpecificPartsComponent;
  let fixture: ComponentFixture<ElectricHybridPHEVCarTruckSpecificPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricHybridPHEVCarTruckSpecificPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricHybridPHEVCarTruckSpecificPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
