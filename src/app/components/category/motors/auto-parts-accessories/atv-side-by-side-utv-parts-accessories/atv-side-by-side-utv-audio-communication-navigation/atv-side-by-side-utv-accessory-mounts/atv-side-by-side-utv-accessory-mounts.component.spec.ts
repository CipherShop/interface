import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAccessoryMountsComponent } from './atv-side-by-side-utv-accessory-mounts.component';

describe('ATVSideBySideUTVAccessoryMountsComponent', () => {
  let component: ATVSideBySideUTVAccessoryMountsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAccessoryMountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAccessoryMountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAccessoryMountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
