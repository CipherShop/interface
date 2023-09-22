import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVWindshieldsWindowsComponent } from './atv-side-by-side-utv-windshields-windows.component';

describe('ATVSideBySideUTVWindshieldsWindowsComponent', () => {
  let component: ATVSideBySideUTVWindshieldsWindowsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVWindshieldsWindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVWindshieldsWindowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVWindshieldsWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
