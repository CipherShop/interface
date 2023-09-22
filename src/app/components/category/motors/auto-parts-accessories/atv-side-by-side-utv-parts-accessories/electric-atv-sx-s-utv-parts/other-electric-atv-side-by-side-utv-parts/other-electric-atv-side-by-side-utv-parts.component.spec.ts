import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherElectricATVSideBySideUTVPartsComponent } from './other-electric-atv-side-by-side-utv-parts.component';

describe('OtherElectricATVSideBySideUTVPartsComponent', () => {
  let component: OtherElectricATVSideBySideUTVPartsComponent;
  let fixture: ComponentFixture<OtherElectricATVSideBySideUTVPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherElectricATVSideBySideUTVPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherElectricATVSideBySideUTVPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
