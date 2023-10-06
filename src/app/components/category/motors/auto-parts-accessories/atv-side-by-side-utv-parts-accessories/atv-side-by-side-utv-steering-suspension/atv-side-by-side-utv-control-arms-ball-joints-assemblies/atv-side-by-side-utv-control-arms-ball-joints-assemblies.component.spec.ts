import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVControlArmsBallJointsAssembliesComponent } from './atv-side-by-side-utv-control-arms-ball-joints-assemblies.component';

describe('ATVSideBySideUTVControlArmsBallJointsAssembliesComponent', () => {
  let component: ATVSideBySideUTVControlArmsBallJointsAssembliesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVControlArmsBallJointsAssembliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVControlArmsBallJointsAssembliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVControlArmsBallJointsAssembliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
