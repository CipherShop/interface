import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVFusesFuseBoxesComponent } from './atv-side-by-side-utv-fuses-fuse-boxes.component';

describe('ATVSideBySideUTVFusesFuseBoxesComponent', () => {
  let component: ATVSideBySideUTVFusesFuseBoxesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVFusesFuseBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVFusesFuseBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVFusesFuseBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
