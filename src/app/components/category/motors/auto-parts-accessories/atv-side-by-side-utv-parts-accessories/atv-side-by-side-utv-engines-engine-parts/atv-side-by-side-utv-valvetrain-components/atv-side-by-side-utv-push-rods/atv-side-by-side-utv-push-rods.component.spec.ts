import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVPushRodsComponent } from './atv-side-by-side-utv-push-rods.component';

describe('ATVSideBySideUTVPushRodsComponent', () => {
  let component: ATVSideBySideUTVPushRodsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVPushRodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVPushRodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVPushRodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
