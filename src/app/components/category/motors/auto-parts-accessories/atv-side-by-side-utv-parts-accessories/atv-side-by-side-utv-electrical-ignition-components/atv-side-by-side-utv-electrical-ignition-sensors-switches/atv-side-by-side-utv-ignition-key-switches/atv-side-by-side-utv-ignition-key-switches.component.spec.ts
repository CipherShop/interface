import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVIgnitionKeySwitchesComponent } from './atv-side-by-side-utv-ignition-key-switches.component';

describe('ATVSideBySideUTVIgnitionKeySwitchesComponent', () => {
  let component: ATVSideBySideUTVIgnitionKeySwitchesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVIgnitionKeySwitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVIgnitionKeySwitchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVIgnitionKeySwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
