import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVValveGuidesSpringsPartsComponent } from './atv-side-by-side-utv-valve-guides-springs-parts.component';

describe('ATVSideBySideUTVValveGuidesSpringsPartsComponent', () => {
  let component: ATVSideBySideUTVValveGuidesSpringsPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVValveGuidesSpringsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVValveGuidesSpringsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVValveGuidesSpringsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
