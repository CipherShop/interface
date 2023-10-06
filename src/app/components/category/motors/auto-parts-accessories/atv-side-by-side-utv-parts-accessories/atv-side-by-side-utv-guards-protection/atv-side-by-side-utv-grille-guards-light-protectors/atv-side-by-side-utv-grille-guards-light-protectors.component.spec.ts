import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVGrilleGuardsLightProtectorsComponent } from './atv-side-by-side-utv-grille-guards-light-protectors.component';

describe('ATVSideBySideUTVGrilleGuardsLightProtectorsComponent', () => {
  let component: ATVSideBySideUTVGrilleGuardsLightProtectorsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVGrilleGuardsLightProtectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVGrilleGuardsLightProtectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVGrilleGuardsLightProtectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
