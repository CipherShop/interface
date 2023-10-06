import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSeatsComponent } from './atv-side-by-side-utv-seats.component';

describe('ATVSideBySideUTVSeatsComponent', () => {
  let component: ATVSideBySideUTVSeatsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSeatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
