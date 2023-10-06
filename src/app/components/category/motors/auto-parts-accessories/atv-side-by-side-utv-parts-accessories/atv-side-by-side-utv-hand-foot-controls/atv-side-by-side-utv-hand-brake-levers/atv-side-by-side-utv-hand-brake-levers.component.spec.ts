import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVHandBrakeLeversComponent } from './atv-side-by-side-utv-hand-brake-levers.component';

describe('ATVSideBySideUTVHandBrakeLeversComponent', () => {
  let component: ATVSideBySideUTVHandBrakeLeversComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVHandBrakeLeversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVHandBrakeLeversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVHandBrakeLeversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
