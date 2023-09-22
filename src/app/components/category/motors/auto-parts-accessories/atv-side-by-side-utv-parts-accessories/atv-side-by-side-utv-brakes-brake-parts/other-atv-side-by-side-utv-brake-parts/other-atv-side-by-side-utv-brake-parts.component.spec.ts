import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVBrakePartsComponent } from './other-atv-side-by-side-utv-brake-parts.component';

describe('OtherATVSideBySideUTVBrakePartsComponent', () => {
  let component: OtherATVSideBySideUTVBrakePartsComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVBrakePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVBrakePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVBrakePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
