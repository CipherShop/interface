import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVCabsDoorsPartsComponent } from './atv-side-by-side-utv-cabs-doors-parts.component';

describe('ATVSideBySideUTVCabsDoorsPartsComponent', () => {
  let component: ATVSideBySideUTVCabsDoorsPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVCabsDoorsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVCabsDoorsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVCabsDoorsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
