import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVHandlebarGripsCoversPadsComponent } from './atv-side-by-side-utv-handlebar-grips-covers-pads.component';

describe('ATVSideBySideUTVHandlebarGripsCoversPadsComponent', () => {
  let component: ATVSideBySideUTVHandlebarGripsCoversPadsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVHandlebarGripsCoversPadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVHandlebarGripsCoversPadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVHandlebarGripsCoversPadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
