import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBrakeSensorsSwitchesComponent } from './atv-side-by-side-utv-brake-sensors-switches.component';

describe('ATVSideBySideUTVBrakeSensorsSwitchesComponent', () => {
  let component: ATVSideBySideUTVBrakeSensorsSwitchesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBrakeSensorsSwitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBrakeSensorsSwitchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBrakeSensorsSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
