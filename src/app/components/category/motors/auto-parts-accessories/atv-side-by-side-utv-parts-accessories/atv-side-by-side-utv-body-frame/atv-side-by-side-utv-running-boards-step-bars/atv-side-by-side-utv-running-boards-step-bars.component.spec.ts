import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVRunningBoardsStepBarsComponent } from './atv-side-by-side-utv-running-boards-step-bars.component';

describe('ATVSideBySideUTVRunningBoardsStepBarsComponent', () => {
  let component: ATVSideBySideUTVRunningBoardsStepBarsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVRunningBoardsStepBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVRunningBoardsStepBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVRunningBoardsStepBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
