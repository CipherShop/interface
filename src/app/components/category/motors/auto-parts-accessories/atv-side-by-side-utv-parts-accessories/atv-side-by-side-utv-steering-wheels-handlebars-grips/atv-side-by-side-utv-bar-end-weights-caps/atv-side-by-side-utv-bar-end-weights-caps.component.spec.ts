import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBarEndWeightsCapsComponent } from './atv-side-by-side-utv-bar-end-weights-caps.component';

describe('ATVSideBySideUTVBarEndWeightsCapsComponent', () => {
  let component: ATVSideBySideUTVBarEndWeightsCapsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBarEndWeightsCapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBarEndWeightsCapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBarEndWeightsCapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
