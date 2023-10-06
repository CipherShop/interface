import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSplashGuardsMudFlapsComponent } from './atv-side-by-side-utv-splash-guards-mud-flaps.component';

describe('ATVSideBySideUTVSplashGuardsMudFlapsComponent', () => {
  let component: ATVSideBySideUTVSplashGuardsMudFlapsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSplashGuardsMudFlapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSplashGuardsMudFlapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSplashGuardsMudFlapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
