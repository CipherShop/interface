import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckWaterPumpsComponent } from './car-truck-water-pumps.component';

describe('CarTruckWaterPumpsComponent', () => {
  let component: CarTruckWaterPumpsComponent;
  let fixture: ComponentFixture<CarTruckWaterPumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckWaterPumpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckWaterPumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
