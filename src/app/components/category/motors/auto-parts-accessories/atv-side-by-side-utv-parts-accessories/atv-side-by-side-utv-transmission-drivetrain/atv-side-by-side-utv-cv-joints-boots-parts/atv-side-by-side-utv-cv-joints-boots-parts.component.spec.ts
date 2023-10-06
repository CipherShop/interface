import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCVJointsBootsPartsComponent } from './atv-side-by-side-utv-cv-joints-boots-parts.component';

describe('ATVSideBySideUTVCVJointsBootsPartsComponent', () => {
  let component: ATVSideBySideUTVCVJointsBootsPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCVJointsBootsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCVJointsBootsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCVJointsBootsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
