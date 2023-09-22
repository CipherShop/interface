import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineCrankcasesComponent } from './atv-side-by-side-utv-engine-crankcases.component';

describe('ATVSideBySideUTVEngineCrankcasesComponent', () => {
  let component: ATVSideBySideUTVEngineCrankcasesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineCrankcasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineCrankcasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineCrankcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
