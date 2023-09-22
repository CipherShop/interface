import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVGPSNavigationComponent } from './atv-side-by-side-utv-gps-navigation.component';

describe('ATVSideBySideUTVGPSNavigationComponent', () => {
  let component: ATVSideBySideUTVGPSNavigationComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVGPSNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVGPSNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVGPSNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
