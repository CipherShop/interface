import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVWheelTirePartsComponent } from './other-atv-side-by-side-utv-wheel-tire-parts.component';

describe('OtherATVSideBySideUTVWheelTirePartsComponent', () => {
  let component: OtherATVSideBySideUTVWheelTirePartsComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVWheelTirePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVWheelTirePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVWheelTirePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
