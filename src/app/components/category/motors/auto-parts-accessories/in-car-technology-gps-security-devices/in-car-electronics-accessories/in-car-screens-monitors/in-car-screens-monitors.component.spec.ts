import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCarScreensMonitorsComponent } from './in-car-screens-monitors.component';

describe('InCarScreensMonitorsComponent', () => {
  let component: InCarScreensMonitorsComponent;
  let fixture: ComponentFixture<InCarScreensMonitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCarScreensMonitorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCarScreensMonitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
