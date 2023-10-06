import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAccessoryLightingComponent } from './atv-side-by-side-utv-accessory-lighting.component';

describe('ATVSideBySideUTVAccessoryLightingComponent', () => {
  let component: ATVSideBySideUTVAccessoryLightingComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAccessoryLightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAccessoryLightingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAccessoryLightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
