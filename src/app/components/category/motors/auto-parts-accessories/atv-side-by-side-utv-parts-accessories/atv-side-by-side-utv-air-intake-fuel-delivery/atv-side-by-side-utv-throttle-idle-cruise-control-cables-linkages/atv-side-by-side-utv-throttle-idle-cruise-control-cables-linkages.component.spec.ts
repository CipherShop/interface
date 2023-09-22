import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVThrottleIdleCruiseControlCablesLinkagesComponent } from './atv-side-by-side-utv-throttle-idle-cruise-control-cables-linkages.component';

describe('ATVSideBySideUTVThrottleIdleCruiseControlCablesLinkagesComponent', () => {
  let component: ATVSideBySideUTVThrottleIdleCruiseControlCablesLinkagesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVThrottleIdleCruiseControlCablesLinkagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVThrottleIdleCruiseControlCablesLinkagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVThrottleIdleCruiseControlCablesLinkagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
