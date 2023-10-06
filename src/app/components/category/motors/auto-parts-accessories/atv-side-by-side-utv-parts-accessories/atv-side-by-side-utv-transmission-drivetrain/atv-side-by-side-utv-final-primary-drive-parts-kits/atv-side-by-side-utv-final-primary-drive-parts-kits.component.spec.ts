import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFinalPrimaryDrivePartsKitsComponent } from './atv-side-by-side-utv-final-primary-drive-parts-kits.component';

describe('ATVSideBySideUTVFinalPrimaryDrivePartsKitsComponent', () => {
  let component: ATVSideBySideUTVFinalPrimaryDrivePartsKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFinalPrimaryDrivePartsKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFinalPrimaryDrivePartsKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFinalPrimaryDrivePartsKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
