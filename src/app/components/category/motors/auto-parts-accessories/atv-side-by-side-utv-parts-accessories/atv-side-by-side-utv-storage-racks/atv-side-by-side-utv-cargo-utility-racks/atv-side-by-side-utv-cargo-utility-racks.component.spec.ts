import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCargoUtilityRacksComponent } from './atv-side-by-side-utv-cargo-utility-racks.component';

describe('ATVSideBySideUTVCargoUtilityRacksComponent', () => {
  let component: ATVSideBySideUTVCargoUtilityRacksComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCargoUtilityRacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCargoUtilityRacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCargoUtilityRacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
