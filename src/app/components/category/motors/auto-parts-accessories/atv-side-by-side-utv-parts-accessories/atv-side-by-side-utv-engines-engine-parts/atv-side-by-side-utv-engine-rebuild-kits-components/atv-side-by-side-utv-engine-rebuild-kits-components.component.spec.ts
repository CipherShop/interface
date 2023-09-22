import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineRebuildKitsComponentsComponent } from './atv-side-by-side-utv-engine-rebuild-kits-components.component';

describe('ATVSideBySideUTVEngineRebuildKitsComponentsComponent', () => {
  let component: ATVSideBySideUTVEngineRebuildKitsComponentsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineRebuildKitsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineRebuildKitsComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineRebuildKitsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
