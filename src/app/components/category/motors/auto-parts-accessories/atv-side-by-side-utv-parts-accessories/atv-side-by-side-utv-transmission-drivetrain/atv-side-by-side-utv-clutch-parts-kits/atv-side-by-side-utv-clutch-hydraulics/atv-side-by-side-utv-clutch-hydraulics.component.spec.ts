import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVClutchHydraulicsComponent } from './atv-side-by-side-utv-clutch-hydraulics.component';

describe('ATVSideBySideUTVClutchHydraulicsComponent', () => {
  let component: ATVSideBySideUTVClutchHydraulicsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVClutchHydraulicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVClutchHydraulicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVClutchHydraulicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
