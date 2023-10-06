import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCenterCapsTrimRingsComponent } from './atv-side-by-side-utv-center-caps-trim-rings.component';

describe('ATVSideBySideUTVCenterCapsTrimRingsComponent', () => {
  let component: ATVSideBySideUTVCenterCapsTrimRingsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCenterCapsTrimRingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCenterCapsTrimRingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCenterCapsTrimRingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
