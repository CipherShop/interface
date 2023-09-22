import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBrakePadsComponent } from './atv-side-by-side-utv-brake-pads.component';

describe('ATVSideBySideUTVBrakePadsComponent', () => {
  let component: ATVSideBySideUTVBrakePadsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBrakePadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBrakePadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBrakePadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
