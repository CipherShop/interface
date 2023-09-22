import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVManifoldIntakeAdapterInletJointComponent } from './atv-side-by-side-utv-manifold-intake-adapter-inlet-joint.component';

describe('ATVSideBySideUTVManifoldIntakeAdapterInletJointComponent', () => {
  let component: ATVSideBySideUTVManifoldIntakeAdapterInletJointComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVManifoldIntakeAdapterInletJointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVManifoldIntakeAdapterInletJointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVManifoldIntakeAdapterInletJointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
