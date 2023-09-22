import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBrakeCablesRodsComponent } from './atv-side-by-side-utv-brake-cables-rods.component';

describe('ATVSideBySideUTVBrakeCablesRodsComponent', () => {
  let component: ATVSideBySideUTVBrakeCablesRodsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBrakeCablesRodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBrakeCablesRodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBrakeCablesRodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
