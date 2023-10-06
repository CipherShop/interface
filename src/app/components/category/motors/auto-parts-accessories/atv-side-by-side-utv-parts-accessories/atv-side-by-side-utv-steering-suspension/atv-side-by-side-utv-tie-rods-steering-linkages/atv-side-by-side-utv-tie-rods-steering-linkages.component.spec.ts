import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVTieRodsSteeringLinkagesComponent } from './atv-side-by-side-utv-tie-rods-steering-linkages.component';

describe('ATVSideBySideUTVTieRodsSteeringLinkagesComponent', () => {
  let component: ATVSideBySideUTVTieRodsSteeringLinkagesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVTieRodsSteeringLinkagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVTieRodsSteeringLinkagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVTieRodsSteeringLinkagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
