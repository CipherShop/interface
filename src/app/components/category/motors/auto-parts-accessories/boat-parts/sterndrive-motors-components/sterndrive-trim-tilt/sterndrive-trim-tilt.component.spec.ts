import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterndriveTrimTiltComponent } from './sterndrive-trim-tilt.component';

describe('SterndriveTrimTiltComponent', () => {
  let component: SterndriveTrimTiltComponent;
  let fixture: ComponentFixture<SterndriveTrimTiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterndriveTrimTiltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterndriveTrimTiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
