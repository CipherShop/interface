import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVReservoirsCapsCoversComponent } from './atv-side-by-side-utv-reservoirs-caps-covers.component';

describe('ATVSideBySideUTVReservoirsCapsCoversComponent', () => {
  let component: ATVSideBySideUTVReservoirsCapsCoversComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVReservoirsCapsCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVReservoirsCapsCoversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVReservoirsCapsCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
