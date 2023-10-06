import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFootBrakeLeversPedalsComponent } from './atv-side-by-side-utv-foot-brake-levers-pedals.component';

describe('ATVSideBySideUTVFootBrakeLeversPedalsComponent', () => {
  let component: ATVSideBySideUTVFootBrakeLeversPedalsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFootBrakeLeversPedalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFootBrakeLeversPedalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFootBrakeLeversPedalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
