import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVGearboxesTransmissionsComponent } from './atv-side-by-side-utv-gearboxes-transmissions.component';

describe('ATVSideBySideUTVGearboxesTransmissionsComponent', () => {
  let component: ATVSideBySideUTVGearboxesTransmissionsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVGearboxesTransmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVGearboxesTransmissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVGearboxesTransmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
