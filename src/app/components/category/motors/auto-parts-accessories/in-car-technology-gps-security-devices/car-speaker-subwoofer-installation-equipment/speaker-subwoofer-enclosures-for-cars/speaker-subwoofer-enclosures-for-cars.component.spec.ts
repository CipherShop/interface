import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerSubwooferEnclosuresForCarsComponent } from './speaker-subwoofer-enclosures-for-cars.component';

describe('SpeakerSubwooferEnclosuresForCarsComponent', () => {
  let component: SpeakerSubwooferEnclosuresForCarsComponent;
  let fixture: ComponentFixture<SpeakerSubwooferEnclosuresForCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerSubwooferEnclosuresForCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerSubwooferEnclosuresForCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
