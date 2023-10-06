import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFinalDriveBeltsChainsComponent } from './atv-side-by-side-utv-final-drive-belts-chains.component';

describe('ATVSideBySideUTVFinalDriveBeltsChainsComponent', () => {
  let component: ATVSideBySideUTVFinalDriveBeltsChainsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFinalDriveBeltsChainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFinalDriveBeltsChainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFinalDriveBeltsChainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
