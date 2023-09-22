import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBrakeBlockoffsComponent } from './atv-side-by-side-utv-brake-blockoffs.component';

describe('ATVSideBySideUTVBrakeBlockoffsComponent', () => {
  let component: ATVSideBySideUTVBrakeBlockoffsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBrakeBlockoffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBrakeBlockoffsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBrakeBlockoffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
