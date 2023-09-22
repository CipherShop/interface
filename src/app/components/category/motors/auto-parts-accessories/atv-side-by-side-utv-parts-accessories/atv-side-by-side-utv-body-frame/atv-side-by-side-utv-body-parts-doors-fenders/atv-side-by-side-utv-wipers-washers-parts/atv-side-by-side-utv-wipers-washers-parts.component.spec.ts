import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVWipersWashersPartsComponent } from './atv-side-by-side-utv-wipers-washers-parts.component';

describe('ATVSideBySideUTVWipersWashersPartsComponent', () => {
  let component: ATVSideBySideUTVWipersWashersPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVWipersWashersPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVWipersWashersPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVWipersWashersPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
