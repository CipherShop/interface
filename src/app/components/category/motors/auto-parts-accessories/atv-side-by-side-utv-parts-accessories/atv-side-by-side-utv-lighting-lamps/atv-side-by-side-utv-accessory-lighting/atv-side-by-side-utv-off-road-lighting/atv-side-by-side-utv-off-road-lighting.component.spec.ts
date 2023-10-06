import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVOffRoadLightingComponent } from './atv-side-by-side-utv-off-road-lighting.component';

describe('ATVSideBySideUTVOffRoadLightingComponent', () => {
  let component: ATVSideBySideUTVOffRoadLightingComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVOffRoadLightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVOffRoadLightingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVOffRoadLightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
