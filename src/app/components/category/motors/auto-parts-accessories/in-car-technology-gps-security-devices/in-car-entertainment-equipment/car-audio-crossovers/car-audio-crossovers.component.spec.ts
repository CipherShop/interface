import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAudioCrossoversComponent } from './car-audio-crossovers.component';

describe('CarAudioCrossoversComponent', () => {
  let component: CarAudioCrossoversComponent;
  let fixture: ComponentFixture<CarAudioCrossoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAudioCrossoversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarAudioCrossoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
