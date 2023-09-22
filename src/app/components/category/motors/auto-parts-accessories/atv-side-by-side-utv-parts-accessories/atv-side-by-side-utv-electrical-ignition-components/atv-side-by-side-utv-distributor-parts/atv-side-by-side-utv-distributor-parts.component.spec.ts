import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVDistributorPartsComponent } from './atv-side-by-side-utv-distributor-parts.component';

describe('ATVSideBySideUTVDistributorPartsComponent', () => {
  let component: ATVSideBySideUTVDistributorPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVDistributorPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVDistributorPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVDistributorPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
