import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatGPSChartplottersComponent } from './boat-gps-chartplotters.component';

describe('BoatGPSChartplottersComponent', () => {
  let component: BoatGPSChartplottersComponent;
  let fixture: ComponentFixture<BoatGPSChartplottersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatGPSChartplottersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatGPSChartplottersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
