import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineRadiatorsComponent } from './atv-side-by-side-utv-engine-radiators.component';

describe('ATVSideBySideUTVEngineRadiatorsComponent', () => {
  let component: ATVSideBySideUTVEngineRadiatorsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineRadiatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineRadiatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineRadiatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
