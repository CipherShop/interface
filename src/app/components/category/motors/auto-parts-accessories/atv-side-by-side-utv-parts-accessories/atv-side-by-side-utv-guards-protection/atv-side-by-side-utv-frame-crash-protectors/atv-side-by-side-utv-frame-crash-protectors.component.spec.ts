import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFrameCrashProtectorsComponent } from './atv-side-by-side-utv-frame-crash-protectors.component';

describe('ATVSideBySideUTVFrameCrashProtectorsComponent', () => {
  let component: ATVSideBySideUTVFrameCrashProtectorsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFrameCrashProtectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFrameCrashProtectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFrameCrashProtectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
