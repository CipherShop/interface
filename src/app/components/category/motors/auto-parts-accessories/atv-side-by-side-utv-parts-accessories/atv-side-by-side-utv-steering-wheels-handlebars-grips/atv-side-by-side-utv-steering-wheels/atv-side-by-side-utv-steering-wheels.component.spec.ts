import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSteeringWheelsComponent } from './atv-side-by-side-utv-steering-wheels.component';

describe('ATVSideBySideUTVSteeringWheelsComponent', () => {
  let component: ATVSideBySideUTVSteeringWheelsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSteeringWheelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSteeringWheelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSteeringWheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
