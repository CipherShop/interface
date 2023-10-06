import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVAArmsSwingarmsComponent } from './atv-side-by-side-utv-a-arms-swingarms.component';

describe('ATVSideBySideUTVAArmsSwingarmsComponent', () => {
  let component: ATVSideBySideUTVAArmsSwingarmsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVAArmsSwingarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVAArmsSwingarmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVAArmsSwingarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
