import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBatteriesComponent } from './atv-side-by-side-utv-batteries.component';

describe('ATVSideBySideUTVBatteriesComponent', () => {
  let component: ATVSideBySideUTVBatteriesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBatteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBatteriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBatteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
