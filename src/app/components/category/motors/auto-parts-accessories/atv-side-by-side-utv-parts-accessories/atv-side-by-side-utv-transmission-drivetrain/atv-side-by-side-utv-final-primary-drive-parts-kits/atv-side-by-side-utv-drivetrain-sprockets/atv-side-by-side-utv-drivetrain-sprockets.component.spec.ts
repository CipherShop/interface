import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVDrivetrainSprocketsComponent } from './atv-side-by-side-utv-drivetrain-sprockets.component';

describe('ATVSideBySideUTVDrivetrainSprocketsComponent', () => {
  let component: ATVSideBySideUTVDrivetrainSprocketsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVDrivetrainSprocketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVDrivetrainSprocketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVDrivetrainSprocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
