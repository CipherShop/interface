import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVClutchCablesComponent } from './atv-side-by-side-utv-clutch-cables.component';

describe('ATVSideBySideUTVClutchCablesComponent', () => {
  let component: ATVSideBySideUTVClutchCablesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVClutchCablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVClutchCablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVClutchCablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
