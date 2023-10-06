import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTankBagsFlangesComponent } from './atv-side-by-side-utv-tank-bags-flanges.component';

describe('ATVSideBySideUTVTankBagsFlangesComponent', () => {
  let component: ATVSideBySideUTVTankBagsFlangesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTankBagsFlangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTankBagsFlangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTankBagsFlangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
