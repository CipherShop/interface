import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSeatCoversComponent } from './atv-side-by-side-utv-seat-covers.component';

describe('ATVSideBySideUTVSeatCoversComponent', () => {
  let component: ATVSideBySideUTVSeatCoversComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSeatCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSeatCoversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSeatCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
