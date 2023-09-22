import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalATVSideBySideUTVPanelsPartsComponent } from './additional-atv-side-by-side-utv-panels-parts.component';

describe('AdditionalATVSideBySideUTVPanelsPartsComponent', () => {
  let component: AdditionalATVSideBySideUTVPanelsPartsComponent;
  let fixture: ComponentFixture<AdditionalATVSideBySideUTVPanelsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalATVSideBySideUTVPanelsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalATVSideBySideUTVPanelsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
