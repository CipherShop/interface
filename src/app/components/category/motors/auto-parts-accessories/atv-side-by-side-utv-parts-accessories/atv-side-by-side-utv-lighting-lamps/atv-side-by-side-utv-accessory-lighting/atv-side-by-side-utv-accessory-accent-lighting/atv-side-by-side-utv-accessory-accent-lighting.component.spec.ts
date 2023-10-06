import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAccessoryAccentLightingComponent } from './atv-side-by-side-utv-accessory-accent-lighting.component';

describe('ATVSideBySideUTVAccessoryAccentLightingComponent', () => {
  let component: ATVSideBySideUTVAccessoryAccentLightingComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAccessoryAccentLightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAccessoryAccentLightingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAccessoryAccentLightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
