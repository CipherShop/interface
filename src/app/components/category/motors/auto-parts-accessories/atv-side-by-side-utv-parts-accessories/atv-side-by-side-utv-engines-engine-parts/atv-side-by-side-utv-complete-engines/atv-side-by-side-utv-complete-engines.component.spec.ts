import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCompleteEnginesComponent } from './atv-side-by-side-utv-complete-engines.component';

describe('ATVSideBySideUTVCompleteEnginesComponent', () => {
  let component: ATVSideBySideUTVCompleteEnginesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCompleteEnginesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCompleteEnginesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCompleteEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
