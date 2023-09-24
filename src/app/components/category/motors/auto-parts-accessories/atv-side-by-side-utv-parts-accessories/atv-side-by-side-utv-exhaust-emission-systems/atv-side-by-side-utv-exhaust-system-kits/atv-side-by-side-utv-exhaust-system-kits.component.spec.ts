import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVExhaustSystemKitsComponent } from './atv-side-by-side-utv-exhaust-system-kits.component';

describe('ATVSideBySideUTVExhaustSystemKitsComponent', () => {
  let component: ATVSideBySideUTVExhaustSystemKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVExhaustSystemKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVExhaustSystemKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVExhaustSystemKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
