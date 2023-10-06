import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTurnSignalAssembliesComponent } from './atv-side-by-side-utv-turn-signal-assemblies.component';

describe('ATVSideBySideUTVTurnSignalAssembliesComponent', () => {
  let component: ATVSideBySideUTVTurnSignalAssembliesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTurnSignalAssembliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTurnSignalAssembliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTurnSignalAssembliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
