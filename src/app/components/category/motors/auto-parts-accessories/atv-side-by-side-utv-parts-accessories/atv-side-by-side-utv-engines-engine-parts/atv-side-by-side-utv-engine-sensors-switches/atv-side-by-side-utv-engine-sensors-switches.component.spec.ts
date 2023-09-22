import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineSensorsSwitchesComponent } from './atv-side-by-side-utv-engine-sensors-switches.component';

describe('ATVSideBySideUTVEngineSensorsSwitchesComponent', () => {
  let component: ATVSideBySideUTVEngineSensorsSwitchesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineSensorsSwitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineSensorsSwitchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineSensorsSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
