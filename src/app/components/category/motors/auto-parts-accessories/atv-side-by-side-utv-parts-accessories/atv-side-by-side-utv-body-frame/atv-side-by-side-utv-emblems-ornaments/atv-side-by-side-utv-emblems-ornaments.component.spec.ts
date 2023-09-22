import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVEmblemsOrnamentsComponent } from './atv-side-by-side-utv-emblems-ornaments.component';

describe('ATVSideBySideUTVEmblemsOrnamentsComponent', () => {
  let component: ATVSideBySideUTVEmblemsOrnamentsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVEmblemsOrnamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVEmblemsOrnamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVEmblemsOrnamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
