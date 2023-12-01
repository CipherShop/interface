import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDashCamsComponent } from './car-dash-cams.component';

describe('CarDashCamsComponent', () => {
  let component: CarDashCamsComponent;
  let fixture: ComponentFixture<CarDashCamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDashCamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDashCamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
