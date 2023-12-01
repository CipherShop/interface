import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckACHosesFittingsComponent } from './car-truck-a-c-hoses-fittings.component';

describe('CarTruckACHosesFittingsComponent', () => {
  let component: CarTruckACHosesFittingsComponent;
  let fixture: ComponentFixture<CarTruckACHosesFittingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckACHosesFittingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckACHosesFittingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
