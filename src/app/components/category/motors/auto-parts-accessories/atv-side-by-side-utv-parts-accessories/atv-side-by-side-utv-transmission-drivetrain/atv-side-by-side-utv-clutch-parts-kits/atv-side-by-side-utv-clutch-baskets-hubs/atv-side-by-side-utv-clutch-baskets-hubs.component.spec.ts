import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVClutchBasketsHubsComponent } from './atv-side-by-side-utv-clutch-baskets-hubs.component';

describe('ATVSideBySideUTVClutchBasketsHubsComponent', () => {
  let component: ATVSideBySideUTVClutchBasketsHubsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVClutchBasketsHubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVClutchBasketsHubsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVClutchBasketsHubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
