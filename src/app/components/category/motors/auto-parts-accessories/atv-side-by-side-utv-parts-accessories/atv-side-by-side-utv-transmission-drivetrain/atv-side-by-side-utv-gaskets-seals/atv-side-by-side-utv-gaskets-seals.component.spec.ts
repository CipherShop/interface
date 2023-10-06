import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVGasketsSealsComponent } from './atv-side-by-side-utv-gaskets-seals.component';

describe('ATVSideBySideUTVGasketsSealsComponent', () => {
  let component: ATVSideBySideUTVGasketsSealsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVGasketsSealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVGasketsSealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVGasketsSealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
