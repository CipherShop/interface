import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVRelaysComponent } from './atv-side-by-side-utv-relays.component';

describe('ATVSideBySideUTVRelaysComponent', () => {
  let component: ATVSideBySideUTVRelaysComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVRelaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVRelaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVRelaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
