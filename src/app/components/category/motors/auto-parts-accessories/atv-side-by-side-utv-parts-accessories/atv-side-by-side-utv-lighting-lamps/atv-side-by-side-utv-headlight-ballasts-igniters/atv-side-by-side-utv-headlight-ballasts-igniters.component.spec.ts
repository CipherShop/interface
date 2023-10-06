import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVHeadlightBallastsIgnitersComponent } from './atv-side-by-side-utv-headlight-ballasts-igniters.component';

describe('ATVSideBySideUTVHeadlightBallastsIgnitersComponent', () => {
  let component: ATVSideBySideUTVHeadlightBallastsIgnitersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVHeadlightBallastsIgnitersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVHeadlightBallastsIgnitersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVHeadlightBallastsIgnitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
