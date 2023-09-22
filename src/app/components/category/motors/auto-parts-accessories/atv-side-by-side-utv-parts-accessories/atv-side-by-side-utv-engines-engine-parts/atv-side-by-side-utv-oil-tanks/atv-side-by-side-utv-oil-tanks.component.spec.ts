import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVOilTanksComponent } from './atv-side-by-side-utv-oil-tanks.component';

describe('ATVSideBySideUTVOilTanksComponent', () => {
  let component: ATVSideBySideUTVOilTanksComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVOilTanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVOilTanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVOilTanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
