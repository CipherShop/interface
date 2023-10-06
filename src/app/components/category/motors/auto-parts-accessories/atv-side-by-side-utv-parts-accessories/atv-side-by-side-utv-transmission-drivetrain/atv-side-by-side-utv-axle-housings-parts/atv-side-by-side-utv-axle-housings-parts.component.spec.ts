import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAxleHousingsPartsComponent } from './atv-side-by-side-utv-axle-housings-parts.component';

describe('ATVSideBySideUTVAxleHousingsPartsComponent', () => {
  let component: ATVSideBySideUTVAxleHousingsPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAxleHousingsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAxleHousingsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAxleHousingsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
