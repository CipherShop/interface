import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVRebuildKitsPartsComponent } from './atv-side-by-side-utv-rebuild-kits-parts.component';

describe('ATVSideBySideUTVRebuildKitsPartsComponent', () => {
  let component: ATVSideBySideUTVRebuildKitsPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVRebuildKitsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVRebuildKitsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVRebuildKitsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
