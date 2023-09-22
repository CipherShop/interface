import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVThrottleBodiesComponent } from './atv-side-by-side-utv-throttle-bodies.component';

describe('ATVSideBySideUTVThrottleBodiesComponent', () => {
  let component: ATVSideBySideUTVThrottleBodiesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVThrottleBodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVThrottleBodiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVThrottleBodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
