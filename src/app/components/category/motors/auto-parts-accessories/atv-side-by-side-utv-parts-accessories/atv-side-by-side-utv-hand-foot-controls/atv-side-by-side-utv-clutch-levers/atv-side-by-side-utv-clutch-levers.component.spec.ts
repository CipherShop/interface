import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVClutchLeversComponent } from './atv-side-by-side-utv-clutch-levers.component';

describe('ATVSideBySideUTVClutchLeversComponent', () => {
  let component: ATVSideBySideUTVClutchLeversComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVClutchLeversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVClutchLeversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVClutchLeversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
