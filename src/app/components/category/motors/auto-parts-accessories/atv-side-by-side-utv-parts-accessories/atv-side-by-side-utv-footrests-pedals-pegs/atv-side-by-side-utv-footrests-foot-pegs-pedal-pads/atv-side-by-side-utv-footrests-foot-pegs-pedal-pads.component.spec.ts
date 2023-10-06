import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFootrestsFootPegsPedalPadsComponent } from './atv-side-by-side-utv-footrests-foot-pegs-pedal-pads.component';

describe('ATVSideBySideUTVFootrestsFootPegsPedalPadsComponent', () => {
  let component: ATVSideBySideUTVFootrestsFootPegsPedalPadsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFootrestsFootPegsPedalPadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFootrestsFootPegsPedalPadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFootrestsFootPegsPedalPadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
