import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineBracketsHardwareComponent } from './atv-side-by-side-utv-engine-brackets-hardware.component';

describe('ATVSideBySideUTVEngineBracketsHardwareComponent', () => {
  let component: ATVSideBySideUTVEngineBracketsHardwareComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineBracketsHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineBracketsHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineBracketsHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
