import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVStarterMotorPartsComponent } from './atv-side-by-side-utv-starter-motor-parts.component';

describe('ATVSideBySideUTVStarterMotorPartsComponent', () => {
  let component: ATVSideBySideUTVStarterMotorPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVStarterMotorPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVStarterMotorPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVStarterMotorPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
