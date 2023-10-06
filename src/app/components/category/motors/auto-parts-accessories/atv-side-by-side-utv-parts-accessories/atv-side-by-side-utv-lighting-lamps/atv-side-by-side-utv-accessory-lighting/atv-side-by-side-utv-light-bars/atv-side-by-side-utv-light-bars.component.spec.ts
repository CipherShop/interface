import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVLightBarsComponent } from './atv-side-by-side-utv-light-bars.component';

describe('ATVSideBySideUTVLightBarsComponent', () => {
  let component: ATVSideBySideUTVLightBarsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVLightBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVLightBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVLightBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
