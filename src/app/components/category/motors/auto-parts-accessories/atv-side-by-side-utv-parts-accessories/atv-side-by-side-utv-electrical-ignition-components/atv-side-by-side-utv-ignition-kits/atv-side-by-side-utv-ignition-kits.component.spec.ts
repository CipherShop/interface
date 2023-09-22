import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVIgnitionKitsComponent } from './atv-side-by-side-utv-ignition-kits.component';

describe('ATVSideBySideUTVIgnitionKitsComponent', () => {
  let component: ATVSideBySideUTVIgnitionKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVIgnitionKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVIgnitionKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVIgnitionKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
