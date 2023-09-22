import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCamshaftsComponent } from './atv-side-by-side-utv-camshafts.component';

describe('ATVSideBySideUTVCamshaftsComponent', () => {
  let component: ATVSideBySideUTVCamshaftsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCamshaftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCamshaftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCamshaftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
