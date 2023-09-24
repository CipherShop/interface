import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVExhaustEmissionSystemsComponent } from './atv-side-by-side-utv-exhaust-emission-systems.component';

describe('ATVSideBySideUTVExhaustEmissionSystemsComponent', () => {
  let component: ATVSideBySideUTVExhaustEmissionSystemsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVExhaustEmissionSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVExhaustEmissionSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVExhaustEmissionSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
