import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVPrimaryDriveKitsComponent } from './atv-side-by-side-utv-primary-drive-kits.component';

describe('ATVSideBySideUTVPrimaryDriveKitsComponent', () => {
  let component: ATVSideBySideUTVPrimaryDriveKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVPrimaryDriveKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVPrimaryDriveKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVPrimaryDriveKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
