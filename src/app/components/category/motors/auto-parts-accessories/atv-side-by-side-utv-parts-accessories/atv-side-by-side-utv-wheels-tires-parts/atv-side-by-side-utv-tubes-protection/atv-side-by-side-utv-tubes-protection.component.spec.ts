import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTubesProtectionComponent } from './atv-side-by-side-utv-tubes-protection.component';

describe('ATVSideBySideUTVTubesProtectionComponent', () => {
  let component: ATVSideBySideUTVTubesProtectionComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTubesProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTubesProtectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTubesProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
