import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVIndividualGaugesComponent } from './atv-side-by-side-utv-individual-gauges.component';

describe('ATVSideBySideUTVIndividualGaugesComponent', () => {
  let component: ATVSideBySideUTVIndividualGaugesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVIndividualGaugesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVIndividualGaugesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVIndividualGaugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
