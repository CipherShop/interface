import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVDifferentialsComponent } from './atv-side-by-side-utv-differentials.component';

describe('ATVSideBySideUTVDifferentialsComponent', () => {
  let component: ATVSideBySideUTVDifferentialsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVDifferentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVDifferentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVDifferentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
