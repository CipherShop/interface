import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAudioCommunicationNavigationComponent } from './atv-side-by-side-utv-audio-communication-navigation.component';

describe('ATVSideBySideUTVAudioCommunicationNavigationComponent', () => {
  let component: ATVSideBySideUTVAudioCommunicationNavigationComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAudioCommunicationNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAudioCommunicationNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAudioCommunicationNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
