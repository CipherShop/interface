import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTruckEngineVacuumPumpsComponent } from './car-truck-engine-vacuum-pumps.component';

describe('CarTruckEngineVacuumPumpsComponent', () => {
  let component: CarTruckEngineVacuumPumpsComponent;
  let fixture: ComponentFixture<CarTruckEngineVacuumPumpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarTruckEngineVacuumPumpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarTruckEngineVacuumPumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
