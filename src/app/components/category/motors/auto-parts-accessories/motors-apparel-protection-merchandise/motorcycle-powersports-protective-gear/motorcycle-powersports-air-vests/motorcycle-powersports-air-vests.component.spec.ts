import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowersportsAirVestsComponent } from './motorcycle-powersports-air-vests.component';

describe('MotorcyclePowersportsAirVestsComponent', () => {
  let component: MotorcyclePowersportsAirVestsComponent;
  let fixture: ComponentFixture<MotorcyclePowersportsAirVestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowersportsAirVestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowersportsAirVestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
