import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFendersComponent } from './atv-side-by-side-utv-fenders.component';

describe('ATVSideBySideUTVFendersComponent', () => {
  let component: ATVSideBySideUTVFendersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFendersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFendersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
