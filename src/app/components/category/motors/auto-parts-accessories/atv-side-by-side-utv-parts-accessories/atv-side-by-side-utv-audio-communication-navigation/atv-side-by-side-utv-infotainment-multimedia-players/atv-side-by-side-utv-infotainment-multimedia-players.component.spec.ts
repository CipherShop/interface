import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATVSideBySideUTVInfotainmentMultimediaPlayersComponent } from './atv-side-by-side-utv-infotainment-multimedia-players.component';

describe('ATVSideBySideUTVInfotainmentMultimediaPlayersComponent', () => {
  let component: ATVSideBySideUTVInfotainmentMultimediaPlayersComponent;
  let fixture: ComponentFixture<ATVSideBySideUTVInfotainmentMultimediaPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATVSideBySideUTVInfotainmentMultimediaPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATVSideBySideUTVInfotainmentMultimediaPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
