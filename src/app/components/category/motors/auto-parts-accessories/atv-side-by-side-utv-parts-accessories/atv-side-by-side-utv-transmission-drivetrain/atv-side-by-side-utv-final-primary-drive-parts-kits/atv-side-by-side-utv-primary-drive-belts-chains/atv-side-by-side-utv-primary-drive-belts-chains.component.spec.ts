import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVPrimaryDriveBeltsChainsComponent } from './atv-side-by-side-utv-primary-drive-belts-chains.component';

describe('ATVSideBySideUTVPrimaryDriveBeltsChainsComponent', () => {
  let component: ATVSideBySideUTVPrimaryDriveBeltsChainsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVPrimaryDriveBeltsChainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVPrimaryDriveBeltsChainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVPrimaryDriveBeltsChainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
