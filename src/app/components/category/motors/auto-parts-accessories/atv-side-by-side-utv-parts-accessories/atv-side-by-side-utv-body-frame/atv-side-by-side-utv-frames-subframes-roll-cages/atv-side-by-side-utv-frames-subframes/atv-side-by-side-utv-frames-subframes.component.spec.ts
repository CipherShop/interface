import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFramesSubframesComponent } from './atv-side-by-side-utv-frames-subframes.component';

describe('ATVSideBySideUTVFramesSubframesComponent', () => {
  let component: ATVSideBySideUTVFramesSubframesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFramesSubframesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFramesSubframesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFramesSubframesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
