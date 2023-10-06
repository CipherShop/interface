import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSeatBeltsHarnessesPartsComponent } from './atv-side-by-side-utv-seat-belts-harnesses-parts.component';

describe('ATVSideBySideUTVSeatBeltsHarnessesPartsComponent', () => {
  let component: ATVSideBySideUTVSeatBeltsHarnessesPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSeatBeltsHarnessesPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSeatBeltsHarnessesPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSeatBeltsHarnessesPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
