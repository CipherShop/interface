import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVForksPartsComponent } from './atv-side-by-side-utv-forks-parts.component';

describe('ATVSideBySideUTVForksPartsComponent', () => {
  let component: ATVSideBySideUTVForksPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVForksPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVForksPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVForksPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
