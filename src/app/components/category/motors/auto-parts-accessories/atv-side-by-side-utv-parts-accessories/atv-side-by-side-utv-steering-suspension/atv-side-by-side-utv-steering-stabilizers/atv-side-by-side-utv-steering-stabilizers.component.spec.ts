import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSteeringStabilizersComponent } from './atv-side-by-side-utv-steering-stabilizers.component';

describe('ATVSideBySideUTVSteeringStabilizersComponent', () => {
  let component: ATVSideBySideUTVSteeringStabilizersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSteeringStabilizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSteeringStabilizersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSteeringStabilizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
