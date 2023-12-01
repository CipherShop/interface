import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCarTruckExhaustEmissionPartsComponent } from './other-car-truck-exhaust-emission-parts.component';

describe('OtherCarTruckExhaustEmissionPartsComponent', () => {
  let component: OtherCarTruckExhaustEmissionPartsComponent;
  let fixture: ComponentFixture<OtherCarTruckExhaustEmissionPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCarTruckExhaustEmissionPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCarTruckExhaustEmissionPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
