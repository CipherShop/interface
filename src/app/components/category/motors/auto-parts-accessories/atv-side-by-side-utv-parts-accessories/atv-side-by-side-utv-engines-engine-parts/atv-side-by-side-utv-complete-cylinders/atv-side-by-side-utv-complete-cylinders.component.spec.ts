import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCompleteCylindersComponent } from './atv-side-by-side-utv-complete-cylinders.component';

describe('ATVSideBySideUTVCompleteCylindersComponent', () => {
  let component: ATVSideBySideUTVCompleteCylindersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCompleteCylindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCompleteCylindersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCompleteCylindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
