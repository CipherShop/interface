import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVShiftGearLeversComponent } from './atv-side-by-side-utv-shift-gear-levers.component';

describe('ATVSideBySideUTVShiftGearLeversComponent', () => {
  let component: ATVSideBySideUTVShiftGearLeversComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVShiftGearLeversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVShiftGearLeversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVShiftGearLeversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
