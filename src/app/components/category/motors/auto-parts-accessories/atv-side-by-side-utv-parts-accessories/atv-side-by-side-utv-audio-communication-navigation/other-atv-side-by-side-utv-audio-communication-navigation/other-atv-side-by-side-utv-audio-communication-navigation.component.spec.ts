import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVAudioCommunicationNavigationComponent } from './other-atv-side-by-side-utv-audio-communication-navigation.component';

describe('OtherATVSideBySideUTVAudioCommunicationNavigationComponent', () => {
  let component: OtherATVSideBySideUTVAudioCommunicationNavigationComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVAudioCommunicationNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVAudioCommunicationNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVAudioCommunicationNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
