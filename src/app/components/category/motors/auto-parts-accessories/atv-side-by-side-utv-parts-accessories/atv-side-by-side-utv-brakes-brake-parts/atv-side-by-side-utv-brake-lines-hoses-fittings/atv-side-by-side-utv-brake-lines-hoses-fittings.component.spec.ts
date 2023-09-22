import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVBrakeLinesHosesFittingsComponent } from './atv-side-by-side-utv-brake-lines-hoses-fittings.component';

describe('ATVSideBySideUTVBrakeLinesHosesFittingsComponent', () => {
  let component: ATVSideBySideUTVBrakeLinesHosesFittingsComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVBrakeLinesHosesFittingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVBrakeLinesHosesFittingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVBrakeLinesHosesFittingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
