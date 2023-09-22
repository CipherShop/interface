import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBrakePadShoeHardwareComponent } from './atv-side-by-side-utv-brake-pad-shoe-hardware.component';

describe('ATVSideBySideUTVBrakePadShoeHardwareComponent', () => {
  let component: ATVSideBySideUTVBrakePadShoeHardwareComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBrakePadShoeHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBrakePadShoeHardwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBrakePadShoeHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
