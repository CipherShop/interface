import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVVoltageRegulatorsRectifiersComponent } from './atv-side-by-side-utv-voltage-regulators-rectifiers.component';

describe('ATVSideBySideUTVVoltageRegulatorsRectifiersComponent', () => {
  let component: ATVSideBySideUTVVoltageRegulatorsRectifiersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVVoltageRegulatorsRectifiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVVoltageRegulatorsRectifiersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVVoltageRegulatorsRectifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
