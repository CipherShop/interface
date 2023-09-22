import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBodyFrameComponent } from './atv-side-by-side-utv-body-frame.component';

describe('ATVSideBySideUTVBodyFrameComponent', () => {
  let component: ATVSideBySideUTVBodyFrameComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBodyFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBodyFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBodyFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
