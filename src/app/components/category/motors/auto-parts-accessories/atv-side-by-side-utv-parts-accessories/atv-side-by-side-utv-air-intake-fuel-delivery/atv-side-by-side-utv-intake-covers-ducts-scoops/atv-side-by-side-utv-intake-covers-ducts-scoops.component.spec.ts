import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVIntakeCoversDuctsScoopsComponent } from './atv-side-by-side-utv-intake-covers-ducts-scoops.component';

describe('ATVSideBySideUTVIntakeCoversDuctsScoopsComponent', () => {
  let component: ATVSideBySideUTVIntakeCoversDuctsScoopsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVIntakeCoversDuctsScoopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVIntakeCoversDuctsScoopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVIntakeCoversDuctsScoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
