import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFlywheelsFlywheelPartsComponent } from './atv-side-by-side-utv-flywheels-flywheel-parts.component';

describe('ATVSideBySideUTVFlywheelsFlywheelPartsComponent', () => {
  let component: ATVSideBySideUTVFlywheelsFlywheelPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFlywheelsFlywheelPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFlywheelsFlywheelPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFlywheelsFlywheelPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
