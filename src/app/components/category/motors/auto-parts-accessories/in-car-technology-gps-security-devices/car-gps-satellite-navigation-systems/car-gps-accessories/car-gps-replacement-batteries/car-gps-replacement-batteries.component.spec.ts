import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarGPSReplacementBatteriesComponent } from './car-gps-replacement-batteries.component';

describe('CarGPSReplacementBatteriesComponent', () => {
  let component: CarGPSReplacementBatteriesComponent;
  let fixture: ComponentFixture<CarGPSReplacementBatteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarGPSReplacementBatteriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarGPSReplacementBatteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
