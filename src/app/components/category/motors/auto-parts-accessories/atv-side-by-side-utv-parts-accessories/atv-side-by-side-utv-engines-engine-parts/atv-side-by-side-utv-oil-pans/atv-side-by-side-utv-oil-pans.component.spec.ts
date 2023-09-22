import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVOilPansComponent } from './atv-side-by-side-utv-oil-pans.component';

describe('ATVSideBySideUTVOilPansComponent', () => {
  let component: ATVSideBySideUTVOilPansComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVOilPansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVOilPansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVOilPansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
