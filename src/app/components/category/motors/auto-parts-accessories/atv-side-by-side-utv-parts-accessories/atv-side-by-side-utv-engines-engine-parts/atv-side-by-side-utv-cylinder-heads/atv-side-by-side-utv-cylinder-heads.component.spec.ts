import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCylinderHeadsComponent } from './atv-side-by-side-utv-cylinder-heads.component';

describe('ATVSideBySideUTVCylinderHeadsComponent', () => {
  let component: ATVSideBySideUTVCylinderHeadsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCylinderHeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCylinderHeadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCylinderHeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
