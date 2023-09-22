import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVElectricalIgnitionComponentsComponent } from './atv-side-by-side-utv-electrical-ignition-components.component';

describe('ATVSideBySideUTVElectricalIgnitionComponentsComponent', () => {
  let component: ATVSideBySideUTVElectricalIgnitionComponentsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVElectricalIgnitionComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVElectricalIgnitionComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVElectricalIgnitionComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
