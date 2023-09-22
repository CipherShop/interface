import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCrankshaftsComponent } from './atv-side-by-side-utv-crankshafts.component';

describe('ATVSideBySideUTVCrankshaftsComponent', () => {
  let component: ATVSideBySideUTVCrankshaftsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCrankshaftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCrankshaftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCrankshaftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
