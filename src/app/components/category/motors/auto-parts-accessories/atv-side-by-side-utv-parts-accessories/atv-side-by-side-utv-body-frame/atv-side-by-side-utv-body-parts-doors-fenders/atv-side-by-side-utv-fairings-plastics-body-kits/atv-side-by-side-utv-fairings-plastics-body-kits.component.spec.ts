import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFairingsPlasticsBodyKitsComponent } from './atv-side-by-side-utv-fairings-plastics-body-kits.component';

describe('ATVSideBySideUTVFairingsPlasticsBodyKitsComponent', () => {
  let component: ATVSideBySideUTVFairingsPlasticsBodyKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFairingsPlasticsBodyKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFairingsPlasticsBodyKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFairingsPlasticsBodyKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
