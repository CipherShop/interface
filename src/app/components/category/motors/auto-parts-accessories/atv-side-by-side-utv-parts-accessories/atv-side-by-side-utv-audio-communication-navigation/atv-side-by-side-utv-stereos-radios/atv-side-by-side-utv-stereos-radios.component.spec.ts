import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVStereosRadiosComponent } from './atv-side-by-side-utv-stereos-radios.component';

describe('ATVSideBySideUTVStereosRadiosComponent', () => {
  let component: ATVSideBySideUTVStereosRadiosComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVStereosRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVStereosRadiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVStereosRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
