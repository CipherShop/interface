import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFootrestsPedalsPegsComponent } from './atv-side-by-side-utv-footrests-pedals-pegs.component';

describe('ATVSideBySideUTVFootrestsPedalsPegsComponent', () => {
  let component: ATVSideBySideUTVFootrestsPedalsPegsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFootrestsPedalsPegsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFootrestsPedalsPegsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFootrestsPedalsPegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
