import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVHandFootControlsComponent } from './atv-side-by-side-utv-hand-foot-controls.component';

describe('ATVSideBySideUTVHandFootControlsComponent', () => {
  let component: ATVSideBySideUTVHandFootControlsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVHandFootControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVHandFootControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVHandFootControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
