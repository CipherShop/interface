import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVDaytimeRunningLightsComponent } from './atv-side-by-side-utv-daytime-running-lights.component';

describe('ATVSideBySideUTVDaytimeRunningLightsComponent', () => {
  let component: ATVSideBySideUTVDaytimeRunningLightsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVDaytimeRunningLightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVDaytimeRunningLightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVDaytimeRunningLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
