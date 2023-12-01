import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherElectricHybridPHEVSpecificCarTruckPartsComponent } from './other-electric-hybrid-phev-specific-car-truck-parts.component';

describe('OtherElectricHybridPHEVSpecificCarTruckPartsComponent', () => {
  let component: OtherElectricHybridPHEVSpecificCarTruckPartsComponent;
  let fixture: ComponentFixture<OtherElectricHybridPHEVSpecificCarTruckPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherElectricHybridPHEVSpecificCarTruckPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherElectricHybridPHEVSpecificCarTruckPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
