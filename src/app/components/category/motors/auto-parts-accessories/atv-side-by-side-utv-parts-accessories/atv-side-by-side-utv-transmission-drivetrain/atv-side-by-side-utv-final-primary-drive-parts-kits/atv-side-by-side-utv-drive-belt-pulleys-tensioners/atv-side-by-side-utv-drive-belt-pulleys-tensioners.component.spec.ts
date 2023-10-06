import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVDriveBeltPulleysTensionersComponent } from './atv-side-by-side-utv-drive-belt-pulleys-tensioners.component';

describe('ATVSideBySideUTVDriveBeltPulleysTensionersComponent', () => {
  let component: ATVSideBySideUTVDriveBeltPulleysTensionersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVDriveBeltPulleysTensionersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVDriveBeltPulleysTensionersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVDriveBeltPulleysTensionersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
