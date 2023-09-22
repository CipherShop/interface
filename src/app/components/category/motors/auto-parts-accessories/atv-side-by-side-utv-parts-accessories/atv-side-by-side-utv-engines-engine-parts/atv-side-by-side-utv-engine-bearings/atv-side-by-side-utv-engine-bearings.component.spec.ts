import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineBearingsComponent } from './atv-side-by-side-utv-engine-bearings.component';

describe('ATVSideBySideUTVEngineBearingsComponent', () => {
  let component: ATVSideBySideUTVEngineBearingsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineBearingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineBearingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
