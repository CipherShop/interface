import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVOnboardToolBagsRepairKitsComponent } from './atv-side-by-side-utv-onboard-tool-bags-repair-kits.component';

describe('ATVSideBySideUTVOnboardToolBagsRepairKitsComponent', () => {
  let component: ATVSideBySideUTVOnboardToolBagsRepairKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVOnboardToolBagsRepairKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVOnboardToolBagsRepairKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVOnboardToolBagsRepairKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
