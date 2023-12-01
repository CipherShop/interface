import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSailingHardwareGearComponent } from './other-sailing-hardware-gear.component';

describe('OtherSailingHardwareGearComponent', () => {
  let component: OtherSailingHardwareGearComponent;
  let fixture: ComponentFixture<OtherSailingHardwareGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherSailingHardwareGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherSailingHardwareGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
