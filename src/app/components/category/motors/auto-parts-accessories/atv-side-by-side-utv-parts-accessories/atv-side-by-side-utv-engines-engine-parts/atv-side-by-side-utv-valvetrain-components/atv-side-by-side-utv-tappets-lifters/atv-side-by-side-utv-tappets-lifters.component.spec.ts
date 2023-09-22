import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTappetsLiftersComponent } from './atv-side-by-side-utv-tappets-lifters.component';

describe('ATVSideBySideUTVTappetsLiftersComponent', () => {
  let component: ATVSideBySideUTVTappetsLiftersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTappetsLiftersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTappetsLiftersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTappetsLiftersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
