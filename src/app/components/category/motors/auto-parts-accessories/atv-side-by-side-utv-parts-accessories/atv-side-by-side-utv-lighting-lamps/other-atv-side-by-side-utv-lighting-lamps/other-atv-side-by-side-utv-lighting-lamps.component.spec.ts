import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVLightingLampsComponent } from './other-atv-side-by-side-utv-lighting-lamps.component';

describe('OtherATVSideBySideUTVLightingLampsComponent', () => {
  let component: OtherATVSideBySideUTVLightingLampsComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVLightingLampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVLightingLampsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVLightingLampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
