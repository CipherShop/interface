import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVThrottleControlsComponent } from './atv-side-by-side-utv-throttle-controls.component';

describe('ATVSideBySideUTVThrottleControlsComponent', () => {
  let component: ATVSideBySideUTVThrottleControlsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVThrottleControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVThrottleControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVThrottleControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
