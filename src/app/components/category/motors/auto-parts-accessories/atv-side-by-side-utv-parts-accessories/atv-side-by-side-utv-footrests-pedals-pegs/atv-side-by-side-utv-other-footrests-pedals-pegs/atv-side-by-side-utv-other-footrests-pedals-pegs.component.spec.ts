import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVOtherFootrestsPedalsPegsComponent } from './atv-side-by-side-utv-other-footrests-pedals-pegs.component';

describe('ATVSideBySideUTVOtherFootrestsPedalsPegsComponent', () => {
  let component: ATVSideBySideUTVOtherFootrestsPedalsPegsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVOtherFootrestsPedalsPegsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVOtherFootrestsPedalsPegsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVOtherFootrestsPedalsPegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
