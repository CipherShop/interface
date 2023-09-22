import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVOilDrainPlugsFillerCapsDipsticksComponent } from './atv-side-by-side-utv-oil-drain-plugs-filler-caps-dipsticks.component';

describe('ATVSideBySideUTVOilDrainPlugsFillerCapsDipsticksComponent', () => {
  let component: ATVSideBySideUTVOilDrainPlugsFillerCapsDipsticksComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVOilDrainPlugsFillerCapsDipsticksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVOilDrainPlugsFillerCapsDipsticksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVOilDrainPlugsFillerCapsDipsticksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
