import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVRockerArmsPartsComponent } from './atv-side-by-side-utv-rocker-arms-parts.component';

describe('ATVSideBySideUTVRockerArmsPartsComponent', () => {
  let component: ATVSideBySideUTVRockerArmsPartsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVRockerArmsPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVRockerArmsPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVRockerArmsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
