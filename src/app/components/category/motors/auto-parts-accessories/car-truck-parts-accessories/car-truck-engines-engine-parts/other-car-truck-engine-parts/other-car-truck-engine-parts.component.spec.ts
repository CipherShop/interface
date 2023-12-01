import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCarTruckEnginePartsComponent } from './other-car-truck-engine-parts.component';

describe('OtherCarTruckEnginePartsComponent', () => {
  let component: OtherCarTruckEnginePartsComponent;
  let fixture: ComponentFixture<OtherCarTruckEnginePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCarTruckEnginePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherCarTruckEnginePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
