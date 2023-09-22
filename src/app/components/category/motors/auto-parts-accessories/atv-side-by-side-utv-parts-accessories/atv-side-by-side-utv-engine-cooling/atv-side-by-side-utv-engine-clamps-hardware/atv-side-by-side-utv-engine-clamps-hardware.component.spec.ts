import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineClampsHardwareComponent } from './atv-side-by-side-utv-engine-clamps-hardware.component';

describe('ATVSideBySideUTVEngineClampsHardwareComponent', () => {
  let component: ATVSideBySideUTVEngineClampsHardwareComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineClampsHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineClampsHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineClampsHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
