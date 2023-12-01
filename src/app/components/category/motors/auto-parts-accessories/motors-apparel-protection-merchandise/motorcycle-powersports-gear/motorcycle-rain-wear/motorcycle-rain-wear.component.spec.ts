import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleRainWearComponent } from './motorcycle-rain-wear.component';

describe('MotorcycleRainWearComponent', () => {
  let component: MotorcycleRainWearComponent;
  let fixture: ComponentFixture<MotorcycleRainWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcycleRainWearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcycleRainWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
