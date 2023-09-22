import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBrakeMasterCylindersComponent } from './atv-side-by-side-utv-brake-master-cylinders.component';

describe('ATVSideBySideUTVBrakeMasterCylindersComponent', () => {
  let component: ATVSideBySideUTVBrakeMasterCylindersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBrakeMasterCylindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBrakeMasterCylindersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBrakeMasterCylindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
