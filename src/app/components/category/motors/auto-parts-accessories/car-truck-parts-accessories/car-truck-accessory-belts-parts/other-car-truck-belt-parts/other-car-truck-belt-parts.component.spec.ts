import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCarTruckBeltPartsComponent } from './other-car-truck-belt-parts.component';

describe('OtherCarTruckBeltPartsComponent', () => {
  let component: OtherCarTruckBeltPartsComponent;
  let fixture: ComponentFixture<OtherCarTruckBeltPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCarTruckBeltPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCarTruckBeltPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
