import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionicsAudioPanelsComponent } from './avionics-audio-panels.component';

describe('AvionicsAudioPanelsComponent', () => {
  let component: AvionicsAudioPanelsComponent;
  let fixture: ComponentFixture<AvionicsAudioPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvionicsAudioPanelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvionicsAudioPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
