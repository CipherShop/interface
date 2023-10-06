import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFloorboardsPartsComponent } from './atv-side-by-side-utv-floorboards-parts.component';

describe('ATVSideBySideUTVFloorboardsPartsComponent', () => {
  let component: ATVSideBySideUTVFloorboardsPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFloorboardsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFloorboardsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFloorboardsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
