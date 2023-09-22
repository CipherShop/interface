import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCylinderBoltsComponent } from './atv-side-by-side-utv-cylinder-bolts.component';

describe('ATVSideBySideUTVCylinderBoltsComponent', () => {
  let component: ATVSideBySideUTVCylinderBoltsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCylinderBoltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCylinderBoltsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCylinderBoltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
