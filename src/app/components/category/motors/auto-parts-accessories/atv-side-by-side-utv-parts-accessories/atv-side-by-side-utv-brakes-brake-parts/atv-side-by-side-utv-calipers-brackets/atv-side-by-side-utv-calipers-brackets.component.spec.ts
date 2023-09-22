import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCalipersBracketsComponent } from './atv-side-by-side-utv-calipers-brackets.component';

describe('ATVSideBySideUTVCalipersBracketsComponent', () => {
  let component: ATVSideBySideUTVCalipersBracketsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCalipersBracketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCalipersBracketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCalipersBracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
