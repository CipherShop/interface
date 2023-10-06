import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTowingRecoveryAccessoriesComponent } from './atv-side-by-side-utv-towing-recovery-accessories.component';

describe('ATVSideBySideUTVTowingRecoveryAccessoriesComponent', () => {
  let component: ATVSideBySideUTVTowingRecoveryAccessoriesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTowingRecoveryAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTowingRecoveryAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTowingRecoveryAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
