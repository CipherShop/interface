import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVEngineCoolingPartsComponent } from './other-atv-side-by-side-utv-engine-cooling-parts.component';

describe('OtherATVSideBySideUTVEngineCoolingPartsComponent', () => {
  let component: OtherATVSideBySideUTVEngineCoolingPartsComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVEngineCoolingPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVEngineCoolingPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVEngineCoolingPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
