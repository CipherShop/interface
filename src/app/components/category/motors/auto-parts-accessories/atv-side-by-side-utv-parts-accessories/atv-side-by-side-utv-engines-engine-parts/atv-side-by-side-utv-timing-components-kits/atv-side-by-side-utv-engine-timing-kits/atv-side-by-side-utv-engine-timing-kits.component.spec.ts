import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineTimingKitsComponent } from './atv-side-by-side-utv-engine-timing-kits.component';

describe('ATVSideBySideUTVEngineTimingKitsComponent', () => {
  let component: ATVSideBySideUTVEngineTimingKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineTimingKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineTimingKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineTimingKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
