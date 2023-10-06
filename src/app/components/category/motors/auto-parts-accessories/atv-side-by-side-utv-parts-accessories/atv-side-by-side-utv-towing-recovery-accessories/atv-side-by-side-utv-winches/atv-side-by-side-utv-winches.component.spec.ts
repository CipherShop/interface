import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVWinchesComponent } from './atv-side-by-side-utv-winches.component';

describe('ATVSideBySideUTVWinchesComponent', () => {
  let component: ATVSideBySideUTVWinchesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVWinchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVWinchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVWinchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
