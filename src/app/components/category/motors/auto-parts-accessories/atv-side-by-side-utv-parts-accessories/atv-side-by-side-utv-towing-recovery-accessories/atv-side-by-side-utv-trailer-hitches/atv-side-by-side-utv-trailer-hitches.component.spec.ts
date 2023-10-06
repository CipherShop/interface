import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTrailerHitchesComponent } from './atv-side-by-side-utv-trailer-hitches.component';

describe('ATVSideBySideUTVTrailerHitchesComponent', () => {
  let component: ATVSideBySideUTVTrailerHitchesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTrailerHitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTrailerHitchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTrailerHitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
