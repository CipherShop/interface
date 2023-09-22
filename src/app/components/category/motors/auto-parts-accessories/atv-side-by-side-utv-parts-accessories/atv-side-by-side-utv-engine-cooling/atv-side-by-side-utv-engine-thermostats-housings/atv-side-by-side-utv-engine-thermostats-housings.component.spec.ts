import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineThermostatsHousingsComponent } from './atv-side-by-side-utv-engine-thermostats-housings.component';

describe('ATVSideBySideUTVEngineThermostatsHousingsComponent', () => {
  let component: ATVSideBySideUTVEngineThermostatsHousingsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineThermostatsHousingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineThermostatsHousingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineThermostatsHousingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
