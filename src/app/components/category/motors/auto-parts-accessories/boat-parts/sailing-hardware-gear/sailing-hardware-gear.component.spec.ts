import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailingHardwareGearComponent } from './sailing-hardware-gear.component';

describe('SailingHardwareGearComponent', () => {
  let component: SailingHardwareGearComponent;
  let fixture: ComponentFixture<SailingHardwareGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SailingHardwareGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SailingHardwareGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
