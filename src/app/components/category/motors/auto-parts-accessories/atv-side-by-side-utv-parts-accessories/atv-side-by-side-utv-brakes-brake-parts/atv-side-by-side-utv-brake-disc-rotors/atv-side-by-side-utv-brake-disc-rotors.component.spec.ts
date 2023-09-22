import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBrakeDiscRotorsComponent } from './atv-side-by-side-utv-brake-disc-rotors.component';

describe('ATVSideBySideUTVBrakeDiscRotorsComponent', () => {
  let component: ATVSideBySideUTVBrakeDiscRotorsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBrakeDiscRotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBrakeDiscRotorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBrakeDiscRotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
