import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBrakeDrumsComponent } from './atv-side-by-side-utv-brake-drums.component';

describe('ATVSideBySideUTVBrakeDrumsComponent', () => {
  let component: ATVSideBySideUTVBrakeDrumsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBrakeDrumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBrakeDrumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBrakeDrumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
