import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSpareTireCarriersComponent } from './atv-side-by-side-utv-spare-tire-carriers.component';

describe('ATVSideBySideUTVSpareTireCarriersComponent', () => {
  let component: ATVSideBySideUTVSpareTireCarriersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSpareTireCarriersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSpareTireCarriersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSpareTireCarriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
