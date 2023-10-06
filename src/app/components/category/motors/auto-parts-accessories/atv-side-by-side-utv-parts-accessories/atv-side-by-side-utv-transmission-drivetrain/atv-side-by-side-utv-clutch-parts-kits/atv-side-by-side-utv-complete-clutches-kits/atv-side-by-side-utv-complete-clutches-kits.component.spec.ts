import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCompleteClutchesKitsComponent } from './atv-side-by-side-utv-complete-clutches-kits.component';

describe('ATVSideBySideUTVCompleteClutchesKitsComponent', () => {
  let component: ATVSideBySideUTVCompleteClutchesKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCompleteClutchesKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCompleteClutchesKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCompleteClutchesKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
