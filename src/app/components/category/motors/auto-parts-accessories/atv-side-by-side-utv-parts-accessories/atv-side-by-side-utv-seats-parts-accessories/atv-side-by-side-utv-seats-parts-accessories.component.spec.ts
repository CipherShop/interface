import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSeatsPartsAccessoriesComponent } from './atv-side-by-side-utv-seats-parts-accessories.component';

describe('ATVSideBySideUTVSeatsPartsAccessoriesComponent', () => {
  let component: ATVSideBySideUTVSeatsPartsAccessoriesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSeatsPartsAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSeatsPartsAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSeatsPartsAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
