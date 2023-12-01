import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RearViewMirrorMonitorsComponent } from './rear-view-mirror-monitors.component';

describe('RearViewMirrorMonitorsComponent', () => {
  let component: RearViewMirrorMonitorsComponent;
  let fixture: ComponentFixture<RearViewMirrorMonitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RearViewMirrorMonitorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RearViewMirrorMonitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
