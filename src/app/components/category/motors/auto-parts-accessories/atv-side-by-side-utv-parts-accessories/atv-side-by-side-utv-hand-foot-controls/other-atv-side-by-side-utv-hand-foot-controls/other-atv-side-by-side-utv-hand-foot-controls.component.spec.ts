import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVHandFootControlsComponent } from './other-atv-side-by-side-utv-hand-foot-controls.component';

describe('OtherATVSideBySideUTVHandFootControlsComponent', () => {
  let component: OtherATVSideBySideUTVHandFootControlsComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVHandFootControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVHandFootControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVHandFootControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
