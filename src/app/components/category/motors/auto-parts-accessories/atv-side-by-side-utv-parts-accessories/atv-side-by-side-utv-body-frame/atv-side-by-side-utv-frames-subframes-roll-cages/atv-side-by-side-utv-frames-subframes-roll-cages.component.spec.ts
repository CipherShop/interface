import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFramesSubframesRollCagesComponent } from './atv-side-by-side-utv-frames-subframes-roll-cages.component';

describe('ATVSideBySideUTVFramesSubframesRollCagesComponent', () => {
  let component: ATVSideBySideUTVFramesSubframesRollCagesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFramesSubframesRollCagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFramesSubframesRollCagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFramesSubframesRollCagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
