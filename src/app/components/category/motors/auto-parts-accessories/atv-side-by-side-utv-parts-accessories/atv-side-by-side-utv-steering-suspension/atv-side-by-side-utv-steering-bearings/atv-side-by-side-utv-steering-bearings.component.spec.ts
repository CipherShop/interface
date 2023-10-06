import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSteeringBearingsComponent } from './atv-side-by-side-utv-steering-bearings.component';

describe('ATVSideBySideUTVSteeringBearingsComponent', () => {
  let component: ATVSideBySideUTVSteeringBearingsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSteeringBearingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSteeringBearingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSteeringBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
