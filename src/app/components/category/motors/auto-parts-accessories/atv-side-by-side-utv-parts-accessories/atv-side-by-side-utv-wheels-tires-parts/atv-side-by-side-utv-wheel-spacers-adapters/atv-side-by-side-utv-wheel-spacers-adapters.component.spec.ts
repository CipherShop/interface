import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVWheelSpacersAdaptersComponent } from './atv-side-by-side-utv-wheel-spacers-adapters.component';

describe('ATVSideBySideUTVWheelSpacersAdaptersComponent', () => {
  let component: ATVSideBySideUTVWheelSpacersAdaptersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVWheelSpacersAdaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVWheelSpacersAdaptersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVWheelSpacersAdaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
