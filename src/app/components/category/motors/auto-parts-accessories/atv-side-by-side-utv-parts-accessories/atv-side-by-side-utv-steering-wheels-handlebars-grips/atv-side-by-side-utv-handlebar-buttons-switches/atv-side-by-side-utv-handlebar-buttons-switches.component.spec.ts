import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVHandlebarButtonsSwitchesComponent } from './atv-side-by-side-utv-handlebar-buttons-switches.component';

describe('ATVSideBySideUTVHandlebarButtonsSwitchesComponent', () => {
  let component: ATVSideBySideUTVHandlebarButtonsSwitchesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVHandlebarButtonsSwitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVHandlebarButtonsSwitchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVHandlebarButtonsSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
