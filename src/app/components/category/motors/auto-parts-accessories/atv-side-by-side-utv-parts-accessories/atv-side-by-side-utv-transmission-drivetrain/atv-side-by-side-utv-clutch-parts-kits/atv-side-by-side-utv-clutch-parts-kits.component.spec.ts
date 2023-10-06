import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVClutchPartsKitsComponent } from './atv-side-by-side-utv-clutch-parts-kits.component';

describe('ATVSideBySideUTVClutchPartsKitsComponent', () => {
  let component: ATVSideBySideUTVClutchPartsKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVClutchPartsKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVClutchPartsKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVClutchPartsKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
