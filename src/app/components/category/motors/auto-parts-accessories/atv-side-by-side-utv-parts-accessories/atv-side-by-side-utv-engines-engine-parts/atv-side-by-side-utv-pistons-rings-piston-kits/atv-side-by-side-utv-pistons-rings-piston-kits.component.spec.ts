import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVPistonsRingsPistonKitsComponent } from './atv-side-by-side-utv-pistons-rings-piston-kits.component';

describe('ATVSideBySideUTVPistonsRingsPistonKitsComponent', () => {
  let component: ATVSideBySideUTVPistonsRingsPistonKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVPistonsRingsPistonKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVPistonsRingsPistonKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVPistonsRingsPistonKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
