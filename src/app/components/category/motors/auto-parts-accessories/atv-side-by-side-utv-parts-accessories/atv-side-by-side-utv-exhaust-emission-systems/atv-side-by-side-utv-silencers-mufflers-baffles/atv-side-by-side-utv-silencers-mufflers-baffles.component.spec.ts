import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVSilencersMufflersBafflesComponent } from './atv-side-by-side-utv-silencers-mufflers-baffles.component';

describe('ATVSideBySideUTVSilencersMufflersBafflesComponent', () => {
  let component: ATVSideBySideUTVSilencersMufflersBafflesComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVSilencersMufflersBafflesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVSilencersMufflersBafflesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVSilencersMufflersBafflesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
