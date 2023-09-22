import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCompleteAudioKitsComponent } from './atv-side-by-side-utv-complete-audio-kits.component';

describe('ATVSideBySideUTVCompleteAudioKitsComponent', () => {
  let component: ATVSideBySideUTVCompleteAudioKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCompleteAudioKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCompleteAudioKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCompleteAudioKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
