import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBatteryAccessoriesComponent } from './atv-side-by-side-utv-battery-accessories.component';

describe('ATVSideBySideUTVBatteryAccessoriesComponent', () => {
  let component: ATVSideBySideUTVBatteryAccessoriesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBatteryAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBatteryAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBatteryAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
