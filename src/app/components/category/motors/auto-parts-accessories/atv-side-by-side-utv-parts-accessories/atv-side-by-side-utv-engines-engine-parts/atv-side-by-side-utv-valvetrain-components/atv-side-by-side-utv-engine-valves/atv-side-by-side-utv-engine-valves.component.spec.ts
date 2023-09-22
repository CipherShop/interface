import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineValvesComponent } from './atv-side-by-side-utv-engine-valves.component';

describe('ATVSideBySideUTVEngineValvesComponent', () => {
  let component: ATVSideBySideUTVEngineValvesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineValvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineValvesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineValvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
