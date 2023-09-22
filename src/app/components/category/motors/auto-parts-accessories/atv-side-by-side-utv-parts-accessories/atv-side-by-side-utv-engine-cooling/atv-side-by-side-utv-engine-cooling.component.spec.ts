import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineCoolingComponent } from './atv-side-by-side-utv-engine-cooling.component';

describe('ATVSideBySideUTVEngineCoolingComponent', () => {
  let component: ATVSideBySideUTVEngineCoolingComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineCoolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineCoolingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineCoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
