import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTensionersPulleysComponent } from './atv-side-by-side-utv-tensioners-pulleys.component';

describe('ATVSideBySideUTVTensionersPulleysComponent', () => {
  let component: ATVSideBySideUTVTensionersPulleysComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTensionersPulleysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTensionersPulleysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTensionersPulleysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
