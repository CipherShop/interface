import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCarburetorPartsComponent } from './atv-side-by-side-utv-carburetor-parts.component';

describe('ATVSideBySideUTVCarburetorPartsComponent', () => {
  let component: ATVSideBySideUTVCarburetorPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCarburetorPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCarburetorPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCarburetorPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
