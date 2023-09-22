import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVElectricalIgnitionComponentsComponent } from './other-atv-side-by-side-utv-electrical-ignition-components.component';

describe('OtherATVSideBySideUTVElectricalIgnitionComponentsComponent', () => {
  let component: OtherATVSideBySideUTVElectricalIgnitionComponentsComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVElectricalIgnitionComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVElectricalIgnitionComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVElectricalIgnitionComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
