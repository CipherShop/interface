import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVRisersClampsBracketsComponent } from './atv-side-by-side-utv-risers-clamps-brackets.component';

describe('ATVSideBySideUTVRisersClampsBracketsComponent', () => {
  let component: ATVSideBySideUTVRisersClampsBracketsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVRisersClampsBracketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVRisersClampsBracketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVRisersClampsBracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
