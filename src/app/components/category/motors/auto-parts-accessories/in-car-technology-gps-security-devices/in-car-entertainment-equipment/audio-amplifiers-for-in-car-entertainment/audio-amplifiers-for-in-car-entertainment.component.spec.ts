import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioAmplifiersForInCarEntertainmentComponent } from './audio-amplifiers-for-in-car-entertainment.component';

describe('AudioAmplifiersForInCarEntertainmentComponent', () => {
  let component: AudioAmplifiersForInCarEntertainmentComponent;
  let fixture: ComponentFixture<AudioAmplifiersForInCarEntertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioAmplifiersForInCarEntertainmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioAmplifiersForInCarEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
