import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioCommunicationNavigationWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent } from './audio-communication-navigation-wiring-harnesses-cables-connectors-for-atvs-side-by-sides-utvs.component';

describe('AudioCommunicationNavigationWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent', () => {
  let component: AudioCommunicationNavigationWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent;
  let fixture: ComponentFixture<AudioCommunicationNavigationWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioCommunicationNavigationWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioCommunicationNavigationWiringHarnessesCablesConnectorsForATVsSideBySidesUTVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
