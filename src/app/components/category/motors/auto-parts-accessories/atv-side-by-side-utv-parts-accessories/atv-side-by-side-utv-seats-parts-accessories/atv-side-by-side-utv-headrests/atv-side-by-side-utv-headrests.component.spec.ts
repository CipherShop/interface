import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVHeadrestsComponent } from './atv-side-by-side-utv-headrests.component';

describe('ATVSideBySideUTVHeadrestsComponent', () => {
  let component: ATVSideBySideUTVHeadrestsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVHeadrestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVHeadrestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVHeadrestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
