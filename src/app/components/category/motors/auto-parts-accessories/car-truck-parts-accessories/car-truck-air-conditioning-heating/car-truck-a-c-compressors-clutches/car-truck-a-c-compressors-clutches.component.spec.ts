import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckACCompressorsClutchesComponent } from './car-truck-a-c-compressors-clutches.component';

describe('CarTruckACCompressorsClutchesComponent', () => {
  let component: CarTruckACCompressorsClutchesComponent;
  let fixture: ComponentFixture<CarTruckACCompressorsClutchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckACCompressorsClutchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckACCompressorsClutchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
