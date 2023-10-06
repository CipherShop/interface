import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVLightBulbsLEDsComponent } from './atv-side-by-side-utv-light-bulbs-leds.component';

describe('ATVSideBySideUTVLightBulbsLEDsComponent', () => {
  let component: ATVSideBySideUTVLightBulbsLEDsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVLightBulbsLEDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVLightBulbsLEDsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVLightBulbsLEDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
