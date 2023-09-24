import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVClampsFlangesHangersHardwareComponent } from './atv-side-by-side-utv-clamps-flanges-hangers-hardware.component';

describe('ATVSideBySideUTVClampsFlangesHangersHardwareComponent', () => {
  let component: ATVSideBySideUTVClampsFlangesHangersHardwareComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVClampsFlangesHangersHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVClampsFlangesHangersHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVClampsFlangesHangersHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
