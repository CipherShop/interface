import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSpeakerSubwooferGrillsGuardsComponent } from './car-speaker-subwoofer-grills-guards.component';

describe('CarSpeakerSubwooferGrillsGuardsComponent', () => {
  let component: CarSpeakerSubwooferGrillsGuardsComponent;
  let fixture: ComponentFixture<CarSpeakerSubwooferGrillsGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSpeakerSubwooferGrillsGuardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSpeakerSubwooferGrillsGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
