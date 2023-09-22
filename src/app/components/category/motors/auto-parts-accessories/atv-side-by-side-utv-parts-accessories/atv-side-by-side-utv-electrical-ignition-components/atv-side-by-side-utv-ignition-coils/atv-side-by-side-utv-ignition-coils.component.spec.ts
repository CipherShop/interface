import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVIgnitionCoilsComponent } from './atv-side-by-side-utv-ignition-coils.component';

describe('ATVSideBySideUTVIgnitionCoilsComponent', () => {
  let component: ATVSideBySideUTVIgnitionCoilsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVIgnitionCoilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVIgnitionCoilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVIgnitionCoilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
