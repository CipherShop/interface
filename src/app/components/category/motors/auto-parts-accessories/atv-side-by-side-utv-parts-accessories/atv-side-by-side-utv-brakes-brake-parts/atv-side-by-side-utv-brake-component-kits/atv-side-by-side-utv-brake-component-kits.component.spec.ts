import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBrakeComponentKitsComponent } from './atv-side-by-side-utv-brake-component-kits.component';

describe('ATVSideBySideUTVBrakeComponentKitsComponent', () => {
  let component: ATVSideBySideUTVBrakeComponentKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBrakeComponentKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBrakeComponentKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBrakeComponentKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
