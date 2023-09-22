import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTurbochargersSuperchargersPartsComponent } from './atv-side-by-side-utv-turbochargers-superchargers-parts.component';

describe('ATVSideBySideUTVTurbochargersSuperchargersPartsComponent', () => {
  let component: ATVSideBySideUTVTurbochargersSuperchargersPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTurbochargersSuperchargersPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTurbochargersSuperchargersPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTurbochargersSuperchargersPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
