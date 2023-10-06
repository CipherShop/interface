import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVShockAbsorbersLinkagesComponent } from './atv-side-by-side-utv-shock-absorbers-linkages.component';

describe('ATVSideBySideUTVShockAbsorbersLinkagesComponent', () => {
  let component: ATVSideBySideUTVShockAbsorbersLinkagesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVShockAbsorbersLinkagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVShockAbsorbersLinkagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVShockAbsorbersLinkagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
