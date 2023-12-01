import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatRadarAutopilotsComponent } from './boat-radar-autopilots.component';

describe('BoatRadarAutopilotsComponent', () => {
  let component: BoatRadarAutopilotsComponent;
  let fixture: ComponentFixture<BoatRadarAutopilotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatRadarAutopilotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatRadarAutopilotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
