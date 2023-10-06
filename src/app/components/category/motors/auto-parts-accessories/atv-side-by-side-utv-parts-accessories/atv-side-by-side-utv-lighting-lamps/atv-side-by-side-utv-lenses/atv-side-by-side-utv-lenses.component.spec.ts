import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVLensesComponent } from './atv-side-by-side-utv-lenses.component';

describe('ATVSideBySideUTVLensesComponent', () => {
  let component: ATVSideBySideUTVLensesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVLensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVLensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVLensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
