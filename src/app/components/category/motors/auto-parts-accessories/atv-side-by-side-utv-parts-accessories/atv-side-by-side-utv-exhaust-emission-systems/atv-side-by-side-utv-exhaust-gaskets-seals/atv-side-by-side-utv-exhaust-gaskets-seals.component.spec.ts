import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVExhaustGasketsSealsComponent } from './atv-side-by-side-utv-exhaust-gaskets-seals.component';

describe('ATVSideBySideUTVExhaustGasketsSealsComponent', () => {
  let component: ATVSideBySideUTVExhaustGasketsSealsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVExhaustGasketsSealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVExhaustGasketsSealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVExhaustGasketsSealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
