import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVClampsMountsComponent } from './atv-side-by-side-utv-clamps-mounts.component';

describe('ATVSideBySideUTVClampsMountsComponent', () => {
  let component: ATVSideBySideUTVClampsMountsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVClampsMountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVClampsMountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVClampsMountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
