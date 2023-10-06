import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVWheelsComponent } from './atv-side-by-side-utv-wheels.component';

describe('ATVSideBySideUTVWheelsComponent', () => {
  let component: ATVSideBySideUTVWheelsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVWheelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVWheelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVWheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
