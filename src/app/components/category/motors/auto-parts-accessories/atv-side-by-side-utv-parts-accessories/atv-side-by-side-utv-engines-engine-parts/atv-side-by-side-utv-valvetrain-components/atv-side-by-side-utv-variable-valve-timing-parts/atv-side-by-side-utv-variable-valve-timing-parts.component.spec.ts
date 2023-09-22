import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVVariableValveTimingPartsComponent } from './atv-side-by-side-utv-variable-valve-timing-parts.component';

describe('ATVSideBySideUTVVariableValveTimingPartsComponent', () => {
  let component: ATVSideBySideUTVVariableValveTimingPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVVariableValveTimingPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVVariableValveTimingPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVVariableValveTimingPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
