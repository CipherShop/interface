import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtvSideBySideUtvCarburetorsComponent } from './atv-side-by-side-utv-carburetors.component';

describe('AtvSideBySideUtvCarburetorsComponent', () => {
  let component: AtvSideBySideUtvCarburetorsComponent;
  let fixture: ComponentFixture<AtvSideBySideUtvCarburetorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtvSideBySideUtvCarburetorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtvSideBySideUtvCarburetorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
