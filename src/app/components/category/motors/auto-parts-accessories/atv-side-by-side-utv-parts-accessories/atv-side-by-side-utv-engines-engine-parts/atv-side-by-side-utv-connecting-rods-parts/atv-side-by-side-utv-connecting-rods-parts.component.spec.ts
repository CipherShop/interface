import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVConnectingRodsPartsComponent } from './atv-side-by-side-utv-connecting-rods-parts.component';

describe('ATVSideBySideUTVConnectingRodsPartsComponent', () => {
  let component: ATVSideBySideUTVConnectingRodsPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVConnectingRodsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVConnectingRodsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVConnectingRodsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
