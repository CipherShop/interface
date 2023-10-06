import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVWheelNutsBoltsStudsComponent } from './atv-side-by-side-utv-wheel-nuts-bolts-studs.component';

describe('ATVSideBySideUTVWheelNutsBoltsStudsComponent', () => {
  let component: ATVSideBySideUTVWheelNutsBoltsStudsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVWheelNutsBoltsStudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVWheelNutsBoltsStudsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVWheelNutsBoltsStudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
