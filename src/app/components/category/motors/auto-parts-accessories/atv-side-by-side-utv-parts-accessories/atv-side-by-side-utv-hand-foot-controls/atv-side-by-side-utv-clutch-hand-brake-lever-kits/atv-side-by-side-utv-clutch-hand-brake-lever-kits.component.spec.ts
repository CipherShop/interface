import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVClutchHandBrakeLeverKitsComponent } from './atv-side-by-side-utv-clutch-hand-brake-lever-kits.component';

describe('ATVSideBySideUTVClutchHandBrakeLeverKitsComponent', () => {
  let component: ATVSideBySideUTVClutchHandBrakeLeverKitsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVClutchHandBrakeLeverKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVClutchHandBrakeLeverKitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVClutchHandBrakeLeverKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
