import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTimingBeltsChainsComponent } from './atv-side-by-side-utv-timing-belts-chains.component';

describe('ATVSideBySideUTVTimingBeltsChainsComponent', () => {
  let component: ATVSideBySideUTVTimingBeltsChainsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTimingBeltsChainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTimingBeltsChainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTimingBeltsChainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
