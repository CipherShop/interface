import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAxlesComponent } from './atv-side-by-side-utv-axles.component';

describe('ATVSideBySideUTVAxlesComponent', () => {
  let component: ATVSideBySideUTVAxlesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAxlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAxlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAxlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
