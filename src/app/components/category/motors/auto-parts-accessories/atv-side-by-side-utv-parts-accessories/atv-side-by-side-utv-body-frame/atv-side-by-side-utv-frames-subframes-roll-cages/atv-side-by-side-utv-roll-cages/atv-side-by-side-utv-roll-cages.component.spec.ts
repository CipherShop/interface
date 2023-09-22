import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVRollCagesComponent } from './atv-side-by-side-utv-roll-cages.component';

describe('ATVSideBySideUTVRollCagesComponent', () => {
  let component: ATVSideBySideUTVRollCagesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVRollCagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVRollCagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVRollCagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
