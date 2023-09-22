import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVStarterMotorsComponent } from './atv-side-by-side-utv-starter-motors.component';

describe('ATVSideBySideUTVStarterMotorsComponent', () => {
  let component: ATVSideBySideUTVStarterMotorsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVStarterMotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVStarterMotorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVStarterMotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
