import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckBrakeHosesLinesFittingsComponent } from './car-truck-brake-hoses-lines-fittings.component';

describe('CarTruckBrakeHosesLinesFittingsComponent', () => {
  let component: CarTruckBrakeHosesLinesFittingsComponent;
  let fixture: ComponentFixture<CarTruckBrakeHosesLinesFittingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckBrakeHosesLinesFittingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckBrakeHosesLinesFittingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
