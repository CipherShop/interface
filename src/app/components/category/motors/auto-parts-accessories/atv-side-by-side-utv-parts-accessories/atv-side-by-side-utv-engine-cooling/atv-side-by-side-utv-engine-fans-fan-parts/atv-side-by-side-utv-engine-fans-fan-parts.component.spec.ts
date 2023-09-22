import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineFansFanPartsComponent } from './atv-side-by-side-utv-engine-fans-fan-parts.component';

describe('ATVSideBySideUTVEngineFansFanPartsComponent', () => {
  let component: ATVSideBySideUTVEngineFansFanPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineFansFanPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineFansFanPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineFansFanPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
