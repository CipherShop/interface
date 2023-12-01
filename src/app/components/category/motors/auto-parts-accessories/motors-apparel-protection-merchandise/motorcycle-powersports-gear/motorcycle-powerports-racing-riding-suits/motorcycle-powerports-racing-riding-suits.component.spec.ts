import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclePowerportsRacingRidingSuitsComponent } from './motorcycle-powerports-racing-riding-suits.component';

describe('MotorcyclePowerportsRacingRidingSuitsComponent', () => {
  let component: MotorcyclePowerportsRacingRidingSuitsComponent;
  let fixture: ComponentFixture<MotorcyclePowerportsRacingRidingSuitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcyclePowerportsRacingRidingSuitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclePowerportsRacingRidingSuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
