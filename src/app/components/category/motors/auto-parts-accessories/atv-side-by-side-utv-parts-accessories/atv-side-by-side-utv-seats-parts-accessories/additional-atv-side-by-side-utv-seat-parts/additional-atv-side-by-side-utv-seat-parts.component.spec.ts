import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalATVSideBySideUTVSeatPartsComponent } from './additional-atv-side-by-side-utv-seat-parts.component';

describe('AdditionalATVSideBySideUTVSeatPartsComponent', () => {
  let component: AdditionalATVSideBySideUTVSeatPartsComponent;
  let fixture: ComponentFixture<AdditionalATVSideBySideUTVSeatPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalATVSideBySideUTVSeatPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalATVSideBySideUTVSeatPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
