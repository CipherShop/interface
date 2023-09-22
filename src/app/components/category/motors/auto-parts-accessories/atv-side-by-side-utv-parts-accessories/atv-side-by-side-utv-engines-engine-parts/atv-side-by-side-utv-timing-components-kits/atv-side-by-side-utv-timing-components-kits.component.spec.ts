import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTimingComponentsKitsComponent } from './atv-side-by-side-utv-timing-components-kits.component';

describe('ATVSideBySideUTVTimingComponentsKitsComponent', () => {
  let component: ATVSideBySideUTVTimingComponentsKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTimingComponentsKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTimingComponentsKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTimingComponentsKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
