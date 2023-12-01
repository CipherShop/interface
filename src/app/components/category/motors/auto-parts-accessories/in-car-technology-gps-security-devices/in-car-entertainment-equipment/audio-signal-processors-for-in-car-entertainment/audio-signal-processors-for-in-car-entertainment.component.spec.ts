import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSignalProcessorsForInCarEntertainmentComponent } from './audio-signal-processors-for-in-car-entertainment.component';

describe('AudioSignalProcessorsForInCarEntertainmentComponent', () => {
  let component: AudioSignalProcessorsForInCarEntertainmentComponent;
  let fixture: ComponentFixture<AudioSignalProcessorsForInCarEntertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioSignalProcessorsForInCarEntertainmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioSignalProcessorsForInCarEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
