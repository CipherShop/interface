import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBearingsComponent } from './atv-side-by-side-utv-bearings.component';

describe('ATVSideBySideUTVBearingsComponent', () => {
  let component: ATVSideBySideUTVBearingsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBearingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBearingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
