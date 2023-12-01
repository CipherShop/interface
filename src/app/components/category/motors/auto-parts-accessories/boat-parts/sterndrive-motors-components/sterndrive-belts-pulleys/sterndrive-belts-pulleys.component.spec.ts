import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterndriveBeltsPulleysComponent } from './sterndrive-belts-pulleys.component';

describe('SterndriveBeltsPulleysComponent', () => {
  let component: SterndriveBeltsPulleysComponent;
  let fixture: ComponentFixture<SterndriveBeltsPulleysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterndriveBeltsPulleysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterndriveBeltsPulleysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
