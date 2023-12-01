import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftTiresTubesComponent } from './aircraft-tires-tubes.component';

describe('AircraftTiresTubesComponent', () => {
  let component: AircraftTiresTubesComponent;
  let fixture: ComponentFixture<AircraftTiresTubesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftTiresTubesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftTiresTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
