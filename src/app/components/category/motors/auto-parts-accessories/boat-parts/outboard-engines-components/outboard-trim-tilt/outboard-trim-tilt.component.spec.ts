import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutboardTrimTiltComponent } from './outboard-trim-tilt.component';

describe('OutboardTrimTiltComponent', () => {
  let component: OutboardTrimTiltComponent;
  let fixture: ComponentFixture<OutboardTrimTiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutboardTrimTiltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutboardTrimTiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
