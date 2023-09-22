import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSpeakersComponent } from './atv-side-by-side-utv-speakers.component';

describe('ATVSideBySideUTVSpeakersComponent', () => {
  let component: ATVSideBySideUTVSpeakersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSpeakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSpeakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
