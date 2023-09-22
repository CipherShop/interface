import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVMountsBracketsHardwareComponent } from './atv-side-by-side-utv-mounts-brackets-hardware.component';

describe('ATVSideBySideUTVMountsBracketsHardwareComponent', () => {
  let component: ATVSideBySideUTVMountsBracketsHardwareComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVMountsBracketsHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVMountsBracketsHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVMountsBracketsHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
