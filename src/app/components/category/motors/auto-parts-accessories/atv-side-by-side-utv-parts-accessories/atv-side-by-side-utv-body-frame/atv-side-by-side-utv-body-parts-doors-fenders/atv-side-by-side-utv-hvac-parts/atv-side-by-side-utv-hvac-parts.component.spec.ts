import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVHVACPartsComponent } from './atv-side-by-side-utv-hvac-parts.component';

describe('ATVSideBySideUTVHVACPartsComponent', () => {
  let component: ATVSideBySideUTVHVACPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVHVACPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVHVACPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVHVACPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
