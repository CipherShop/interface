import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVClutchPlatesDiscsComponent } from './atv-side-by-side-utv-clutch-plates-discs.component';

describe('ATVSideBySideUTVClutchPlatesDiscsComponent', () => {
  let component: ATVSideBySideUTVClutchPlatesDiscsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVClutchPlatesDiscsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVClutchPlatesDiscsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVClutchPlatesDiscsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
