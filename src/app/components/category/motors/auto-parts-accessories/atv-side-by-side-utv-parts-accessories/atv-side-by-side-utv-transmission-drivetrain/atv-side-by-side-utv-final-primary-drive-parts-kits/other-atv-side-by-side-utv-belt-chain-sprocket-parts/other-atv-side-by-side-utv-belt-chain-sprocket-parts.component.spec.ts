import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherATVSideBySideUTVBeltChainSprocketPartsComponent } from './other-atv-side-by-side-utv-belt-chain-sprocket-parts.component';

describe('OtherATVSideBySideUTVBeltChainSprocketPartsComponent', () => {
  let component: OtherATVSideBySideUTVBeltChainSprocketPartsComponent;
  let fixture: ComponentFixture<OtherATVSideBySideUTVBeltChainSprocketPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherATVSideBySideUTVBeltChainSprocketPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherATVSideBySideUTVBeltChainSprocketPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
