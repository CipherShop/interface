import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVBodyFrameComponent } from './other-atv-side-by-side-utv-body-frame.component';

describe('OtherATVSideBySideUTVBodyFrameComponent', () => {
  let component: OtherATVSideBySideUTVBodyFrameComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVBodyFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVBodyFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVBodyFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
