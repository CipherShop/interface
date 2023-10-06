import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFinalDriveKitsComponent } from './atv-side-by-side-utv-final-drive-kits.component';

describe('ATVSideBySideUTVFinalDriveKitsComponent', () => {
  let component: ATVSideBySideUTVFinalDriveKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFinalDriveKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFinalDriveKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFinalDriveKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
