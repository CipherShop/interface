import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBodyPartsDoorsFendersComponent } from './atv-side-by-side-utv-body-parts-doors-fenders.component';

describe('ATVSideBySideUTVBodyPartsDoorsFendersComponent', () => {
  let component: ATVSideBySideUTVBodyPartsDoorsFendersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBodyPartsDoorsFendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBodyPartsDoorsFendersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBodyPartsDoorsFendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
