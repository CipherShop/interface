import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCameraDetectorsComponent } from './car-camera-detectors.component';

describe('CarCameraDetectorsComponent', () => {
  let component: CarCameraDetectorsComponent;
  let fixture: ComponentFixture<CarCameraDetectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarCameraDetectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarCameraDetectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
