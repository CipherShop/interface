import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTrailerHitchAccessoriesComponent } from './atv-side-by-side-utv-trailer-hitch-accessories.component';

describe('ATVSideBySideUTVTrailerHitchAccessoriesComponent', () => {
  let component: ATVSideBySideUTVTrailerHitchAccessoriesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTrailerHitchAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTrailerHitchAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTrailerHitchAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
