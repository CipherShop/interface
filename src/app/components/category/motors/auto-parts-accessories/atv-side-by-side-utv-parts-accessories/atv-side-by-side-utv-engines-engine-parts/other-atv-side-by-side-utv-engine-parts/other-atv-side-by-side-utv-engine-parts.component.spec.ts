import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVEnginePartsComponent } from './other-atv-side-by-side-utv-engine-parts.component';

describe('OtherATVSideBySideUTVEnginePartsComponent', () => {
  let component: OtherATVSideBySideUTVEnginePartsComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVEnginePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVEnginePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVEnginePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
