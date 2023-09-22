import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineCoversComponent } from './atv-side-by-side-utv-engine-covers.component';

describe('ATVSideBySideUTVEngineCoversComponent', () => {
  let component: ATVSideBySideUTVEngineCoversComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineCoversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
