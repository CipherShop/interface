import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEngineMountsComponent } from './atv-side-by-side-utv-engine-mounts.component';

describe('ATVSideBySideUTVEngineMountsComponent', () => {
  let component: ATVSideBySideUTVEngineMountsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEngineMountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEngineMountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEngineMountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
