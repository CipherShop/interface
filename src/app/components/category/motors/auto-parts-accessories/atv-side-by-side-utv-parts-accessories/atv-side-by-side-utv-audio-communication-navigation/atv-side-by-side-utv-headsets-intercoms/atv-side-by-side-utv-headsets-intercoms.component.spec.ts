import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVHeadsetsIntercomsComponent } from './atv-side-by-side-utv-headsets-intercoms.component';

describe('ATVSideBySideUTVHeadsetsIntercomsComponent', () => {
  let component: ATVSideBySideUTVHeadsetsIntercomsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVHeadsetsIntercomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVHeadsetsIntercomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVHeadsetsIntercomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
