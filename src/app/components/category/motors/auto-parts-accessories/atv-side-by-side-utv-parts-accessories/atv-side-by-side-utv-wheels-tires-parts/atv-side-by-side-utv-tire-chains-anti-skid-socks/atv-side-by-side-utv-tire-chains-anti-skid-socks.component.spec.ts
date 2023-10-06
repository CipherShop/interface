import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTireChainsAntiSkidSocksComponent } from './atv-side-by-side-utv-tire-chains-anti-skid-socks.component';

describe('ATVSideBySideUTVTireChainsAntiSkidSocksComponent', () => {
  let component: ATVSideBySideUTVTireChainsAntiSkidSocksComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTireChainsAntiSkidSocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTireChainsAntiSkidSocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTireChainsAntiSkidSocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
