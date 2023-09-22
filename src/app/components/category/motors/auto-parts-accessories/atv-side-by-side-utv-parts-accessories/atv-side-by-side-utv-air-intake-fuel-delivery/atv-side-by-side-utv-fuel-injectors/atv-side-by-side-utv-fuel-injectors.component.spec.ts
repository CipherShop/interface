import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFuelInjectorsComponent } from './atv-side-by-side-utv-fuel-injectors.component';

describe('ATVSideBySideUTVFuelInjectorsComponent', () => {
  let component: ATVSideBySideUTVFuelInjectorsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFuelInjectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFuelInjectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFuelInjectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
