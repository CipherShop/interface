import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVClutchCoversComponent } from './atv-side-by-side-utv-clutch-covers.component';

describe('ATVSideBySideUTVClutchCoversComponent', () => {
  let component: ATVSideBySideUTVClutchCoversComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVClutchCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVClutchCoversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVClutchCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
