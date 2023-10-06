import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVWinchAccessoriesComponent } from './atv-side-by-side-utv-winch-accessories.component';

describe('ATVSideBySideUTVWinchAccessoriesComponent', () => {
  let component: ATVSideBySideUTVWinchAccessoriesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVWinchAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVWinchAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVWinchAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
