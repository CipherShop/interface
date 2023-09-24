import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVExhaustEmissionSystemPartsComponent } from './other-atv-side-by-side-utv-exhaust-emission-system-parts.component';

describe('OtherATVSideBySideUTVExhaustEmissionSystemPartsComponent', () => {
  let component: OtherATVSideBySideUTVExhaustEmissionSystemPartsComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVExhaustEmissionSystemPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVExhaustEmissionSystemPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVExhaustEmissionSystemPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
