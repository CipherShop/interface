import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalATVSideBySideUTVClutchPartsComponent } from './additional-atv-side-by-side-utv-clutch-parts.component';

describe('AdditionalATVSideBySideUTVClutchPartsComponent', () => {
  let component: AdditionalATVSideBySideUTVClutchPartsComponent;
  let fixture: ComponentFixture<AdditionalATVSideBySideUTVClutchPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalATVSideBySideUTVClutchPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalATVSideBySideUTVClutchPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
