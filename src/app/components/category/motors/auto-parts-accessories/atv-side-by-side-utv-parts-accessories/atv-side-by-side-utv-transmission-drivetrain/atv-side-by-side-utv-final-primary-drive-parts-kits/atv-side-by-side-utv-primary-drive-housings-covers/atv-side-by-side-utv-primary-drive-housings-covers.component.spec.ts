import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVPrimaryDriveHousingsCoversComponent } from './atv-side-by-side-utv-primary-drive-housings-covers.component';

describe('ATVSideBySideUTVPrimaryDriveHousingsCoversComponent', () => {
  let component: ATVSideBySideUTVPrimaryDriveHousingsCoversComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVPrimaryDriveHousingsCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVPrimaryDriveHousingsCoversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVPrimaryDriveHousingsCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
