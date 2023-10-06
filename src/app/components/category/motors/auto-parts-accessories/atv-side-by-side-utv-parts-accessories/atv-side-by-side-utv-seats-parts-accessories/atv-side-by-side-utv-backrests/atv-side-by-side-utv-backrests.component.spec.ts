import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBackrestsComponent } from './atv-side-by-side-utv-backrests.component';

describe('ATVSideBySideUTVBackrestsComponent', () => {
  let component: ATVSideBySideUTVBackrestsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBackrestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBackrestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBackrestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
