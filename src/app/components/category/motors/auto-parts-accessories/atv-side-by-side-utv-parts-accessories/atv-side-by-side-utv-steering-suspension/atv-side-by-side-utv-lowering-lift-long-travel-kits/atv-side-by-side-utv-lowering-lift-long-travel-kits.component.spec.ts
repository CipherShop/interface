import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVLoweringLiftLongTravelKitsComponent } from './atv-side-by-side-utv-lowering-lift-long-travel-kits.component';

describe('ATVSideBySideUTVLoweringLiftLongTravelKitsComponent', () => {
  let component: ATVSideBySideUTVLoweringLiftLongTravelKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVLoweringLiftLongTravelKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVLoweringLiftLongTravelKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVLoweringLiftLongTravelKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
