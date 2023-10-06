import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVGearboxTransmissionPartsComponent } from './atv-side-by-side-utv-gearbox-transmission-parts.component';

describe('ATVSideBySideUTVGearboxTransmissionPartsComponent', () => {
  let component: ATVSideBySideUTVGearboxTransmissionPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVGearboxTransmissionPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVGearboxTransmissionPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVGearboxTransmissionPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
