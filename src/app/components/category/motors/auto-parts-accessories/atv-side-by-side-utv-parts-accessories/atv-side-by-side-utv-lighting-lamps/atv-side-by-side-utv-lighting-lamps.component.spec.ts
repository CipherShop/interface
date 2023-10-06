import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVLightingLampsComponent } from './atv-side-by-side-utv-lighting-lamps.component';

describe('ATVSideBySideUTVLightingLampsComponent', () => {
  let component: ATVSideBySideUTVLightingLampsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVLightingLampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVLightingLampsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVLightingLampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
