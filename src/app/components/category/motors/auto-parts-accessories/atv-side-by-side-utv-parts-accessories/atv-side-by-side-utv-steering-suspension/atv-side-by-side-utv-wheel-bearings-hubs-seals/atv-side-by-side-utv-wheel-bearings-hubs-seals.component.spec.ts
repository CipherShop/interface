import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVWheelBearingsHubsSealsComponent } from './atv-side-by-side-utv-wheel-bearings-hubs-seals.component';

describe('ATVSideBySideUTVWheelBearingsHubsSealsComponent', () => {
  let component: ATVSideBySideUTVWheelBearingsHubsSealsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVWheelBearingsHubsSealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVWheelBearingsHubsSealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVWheelBearingsHubsSealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
