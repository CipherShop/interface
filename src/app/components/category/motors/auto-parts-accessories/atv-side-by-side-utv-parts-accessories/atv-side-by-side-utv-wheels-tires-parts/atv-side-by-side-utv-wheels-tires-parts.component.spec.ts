import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVWheelsTiresPartsComponent } from './atv-side-by-side-utv-wheels-tires-parts.component';

describe('ATVSideBySideUTVWheelsTiresPartsComponent', () => {
  let component: ATVSideBySideUTVWheelsTiresPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVWheelsTiresPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVWheelsTiresPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVWheelsTiresPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
