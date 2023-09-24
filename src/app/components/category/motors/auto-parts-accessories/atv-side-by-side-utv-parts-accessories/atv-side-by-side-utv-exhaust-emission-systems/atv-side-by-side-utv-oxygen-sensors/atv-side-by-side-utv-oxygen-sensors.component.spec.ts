import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVOxygenSensorsComponent } from './atv-side-by-side-utv-oxygen-sensors.component';

describe('ATVSideBySideUTVOxygenSensorsComponent', () => {
  let component: ATVSideBySideUTVOxygenSensorsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVOxygenSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVOxygenSensorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVOxygenSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
